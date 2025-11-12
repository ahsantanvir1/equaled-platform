#!/bin/bash
# Complete GitHub setup and push script
# Usage: ./push-to-github-with-token.sh YOUR_TOKEN

set -e

if [ -z "$1" ]; then
    echo "❌ Error: GitHub token required"
    echo ""
    echo "Usage: ./push-to-github-with-token.sh YOUR_TOKEN"
    echo ""
    echo "To create a token:"
    echo "1. Go to: https://github.com/settings/tokens"
    echo "2. Click 'Generate new token (classic)'"
    echo "3. Select 'repo' permissions"
    echo "4. Copy token and run: ./push-to-github-with-token.sh YOUR_TOKEN"
    exit 1
fi

GITHUB_TOKEN="$1"
REPO_NAME="equaled-platform"
REPO_DESCRIPTION="Tutoring platform for Pennsylvania students - EqualEd"

echo "🚀 Setting up GitHub repository and pushing code..."
echo ""

# Get GitHub username
echo "📋 Step 1: Authenticating with GitHub..."
USERNAME=$(curl -s -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user 2>/dev/null | grep -o '"login":"[^"]*"' | cut -d'"' -f4)

if [ -z "$USERNAME" ]; then
    echo "❌ Error: Could not authenticate with GitHub"
    echo "Please verify your token is correct and has 'repo' permissions"
    echo ""
    echo "Create a new token at: https://github.com/settings/tokens"
    exit 1
fi

echo "✅ Authenticated as: ${USERNAME}"
echo ""

# Check if repository exists
echo "📦 Step 2: Checking repository..."
EXISTS=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/${USERNAME}/${REPO_NAME} 2>/dev/null)

if [ "$EXISTS" = "200" ]; then
    echo "ℹ️  Repository already exists, will push to it..."
else
    echo "📦 Creating new repository..."
    RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
      -H "Authorization: token ${GITHUB_TOKEN}" \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/user/repos \
      -d "{\"name\":\"${REPO_NAME}\",\"description\":\"${REPO_DESCRIPTION}\",\"private\":false}" 2>/dev/null)

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    
    if [ "$HTTP_CODE" = "201" ]; then
        echo "✅ Repository created successfully!"
    elif [ "$HTTP_CODE" = "422" ]; then
        echo "ℹ️  Repository might already exist, continuing..."
    else
        echo "❌ Failed to create repository. HTTP Code: $HTTP_CODE"
        echo "Please create it manually at: https://github.com/new"
        echo "Then run: git remote add origin https://github.com/${USERNAME}/${REPO_NAME}.git"
        exit 1
    fi
fi
echo ""

# Configure git
echo "🔗 Step 3: Configuring git remote..."
cd "/Users/at/Documents/Cursor - Projects/EqualEd"

# Remove existing remote if any
git remote remove origin 2>/dev/null || true

# Add remote with token (temporary, for initial push)
git remote add origin https://${GITHUB_TOKEN}@github.com/${USERNAME}/${REPO_NAME}.git

# Ensure we're on main branch
git branch -M main 2>/dev/null || true

# Push to GitHub
echo "📤 Step 4: Pushing code to GitHub..."
git push -u origin main

# Update remote to remove token (for security)
echo "🔒 Step 5: Securing git configuration..."
git remote set-url origin https://github.com/${USERNAME}/${REPO_NAME}.git

# Configure git credential helper for future pushes
git config credential.helper store
echo "https://${USERNAME}:${GITHUB_TOKEN}@github.com" > ~/.git-credentials

echo ""
echo "✅ Success! Repository pushed to GitHub!"
echo ""
echo "🌐 Repository URL: https://github.com/${USERNAME}/${REPO_NAME}"
echo ""
echo "📝 Next steps:"
echo "   1. Verify: https://github.com/${USERNAME}/${REPO_NAME}"
echo "   2. Deploy to Vercel: https://vercel.com"
echo "   3. Share with client!"
echo ""
echo "🔄 Auto-push is now configured!"
echo "   Future commits will automatically push to GitHub"

