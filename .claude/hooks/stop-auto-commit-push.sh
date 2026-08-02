#!/usr/bin/env bash
# Stop hook: when Claude finishes a turn and the working tree has changes,
# build (if a build script exists), commit, and push to GitHub.
# Vercel is linked via GitHub integration, so a push triggers deployment automatically.
set -uo pipefail

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo '{}'
  exit 0
fi

if [ -z "$(git status --porcelain)" ]; then
  echo '{}'
  exit 0
fi

if [ -f package.json ] && grep -q '"build"[[:space:]]*:' package.json; then
  build_output=$(npm run build 2>&1)
  build_status=$?
  if [ "$build_status" -ne 0 ]; then
    short=$(printf '%s' "$build_output" | tail -n 25)
    jq -n --arg m "ビルドに失敗したため commit/push/deploy をスキップしました。
$short" '{systemMessage: $m}'
    exit 0
  fi
fi

git add -A
git commit -m "Auto-commit: update $(date '+%Y-%m-%d %H:%M:%S')" >/dev/null 2>&1

branch=$(git rev-parse --abbrev-ref HEAD)
push_output=$(git push origin "$branch" 2>&1)
push_status=$?

if [ "$push_status" -eq 0 ]; then
  jq -n '{systemMessage: "変更をコミットしてGitHubにpushしました。Vercelが自動デプロイを開始します。"}'
else
  jq -n --arg m "git push に失敗しました:
$push_output" '{systemMessage: $m}'
fi
