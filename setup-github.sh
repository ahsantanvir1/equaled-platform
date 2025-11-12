#!/bin/bash

# Script to set up GitHub repository and push code
# Usage: ./setup-github.sh YOUR_GITHUB_TOKEN

set -e

if [ -z "$1" ]; then
    echo "❌ Error: GitHub token required"
    echo "Usage: ./setup-github.sh YOUR_GITHUB_TOKEN"
    echo ""
    echo "To create a token:"
    echo "1. Go to: https://github.com/settings/tokens"
    echo "2. Generate new token (classic)"
    echo "3. Select 'repo' permissions"
    echo "4. Copy the token and run this script"
    exit 1
fi

GITHUB_TOKEN="$1"
REPO_NAME="equaled-platform"
REPO_DESCRIPTION="Tutoring platform for Pennsylvania students - EqualEd"

echo "🚀 Setting up GitHub repository..."

# Get GitHub username
echo "📋 Getting GitHub username..."
USERNAME=$(curl -s -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user | grep -o '"login":"[^"]*"' | cut -d'"' -f4)

if [ -z "$USERNAME" ]; then
    echo "❌ Error: Could not authenticate with GitHub"
    echo "Please check your token is valid and has 'repo' permissions"
    exit 1
fi

echo "✅ Authenticated as: ${USERNAME}"

# Check if repository already exists
echo "🔍 Checking if repository exists..."
EXISTS=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/${USERNAME}/${REPO_NAME})

if [ "$EXISTS" = "200" ]; then
    echo "⚠️  Repository already exists, will push to it..."
else
    # Create repository
    echo "📦 Creating repository on GitHub..."
    RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
      -H "Authorization: token ${GITHUB_TOKEN}" \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/user/repos \
      -d "{\"name\":\"${REPO_NAME}\",\"description\":\"${REPO_DESCRIPTION}\",\"private\":false}")

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    
    if [ "$HTTP_CODE" = "201" ]; then
        echo "✅ Repository created successfully!"
    else
        echo "❌ Failed to create repository. HTTP Code: $HTTP_CODE"
        echo "Response: $(echo "$RESPONSE" | sed '$d')"
        exit 1
    fi
fi

# Configure git remote
echo "🔗 Configuring git remote..."
cd "/Users/at/Documents/Cursor - Projects/EqualEd"
git remote remove origin 2>/dev/null || true
git remote add origin https://${GITHUB_TOKEN}@github.com/${USERNAME}/${REPO_NAME}.git

# Ensure we're on main branch
git branch -M main

# Push to GitHub
echo "📤 Pushing code to GitHub..."
git push -u origin main

# Update remote to remove token (for security)
echo "🔒 Securing git remote..."
git remote set-url origin https://github.com/${USERNAME}/${REPO_NAME}.git

echo ""
echo "✅ Success! Repository pushed to GitHub!"
echo "🌐 Repository URL: https://github.com/${USERNAME}/${REPO_NAME}"
echo ""
echo "📝 Next steps:"
echo "   1. Verify repository is public: https://github.com/${USERNAME}/${REPO_NAME}"
echo "   2. Deploy to Vercel: https://vercel.com"
echo "   3. Share with client!"
echo ""
echo "🔒 Security: Token has been removed from git remote URL"
echo "   Future pushes will use GitHub's credential helper"

