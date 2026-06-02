#!/usr/bin/env bash

set -e

# Current deployment flow:
# 1. Commit source changes on `master`
# 2. Push `master`
# 3. Let GitHub Pages build remotely
#
# Optional usage:
#   ./site_update.sh "your commit message"

COMMIT_MSG=${1:-"Update site"}

echo "Deploying via master -> GitHub Pages auto-build"

git add .

if git diff --cached --quiet; then
  echo "No staged changes to commit."
else
  git commit -m "$COMMIT_MSG"
fi

git push origin master

echo "Pushed to master. GitHub Pages will build the site remotely."
