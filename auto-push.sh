#!/bin/bash
# Script to automatically commit and push changes
# Usage: ./auto-push.sh "Commit message"

set -e

if [ -z "$1" ]; then
    COMMIT_MSG="Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MSG="$1"
fi

echo "🔄 Auto-committing and pushing changes..."

cd "/Users/at/Documents/Cursor - Projects/EqualEd"

# Check if there are changes
if [ -z "$(git status --porcelain)" ]; then
    echo "ℹ️  No changes to commit."
    exit 0
fi

# Add all changes
git add .

# Commit
git commit -m "$COMMIT_MSG"

# Push
echo "📤 Pushing to GitHub..."
git push origin main

echo "✅ Changes pushed successfully!"

