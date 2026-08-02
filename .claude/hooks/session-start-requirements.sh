#!/usr/bin/env bash
# SessionStart hook: if a requirements doc is present in the project root,
# inject its content into context and instruct Claude to plan before coding.
set -uo pipefail

file=$(find . -maxdepth 2 -type f \
  \( -iname "*要件定義*" -o -iname "*requirements*.md" -o -iname "*requirements*.txt" \) \
  ! -path "*/node_modules/*" ! -path "*/.git/*" 2>/dev/null | sort | head -n1)

if [ -z "$file" ]; then
  echo '{}'
  exit 0
fi

content=$(cat "$file")

instruction="要件定義書「${file}」が見つかりました。作業を始める前に、必ず以下を行ってください。
1. この内容を読み込み、要件を理解する。
2. EnterPlanMode ツールでPlanモードに入り、実装方針・タスク分解を提示してユーザーの承認を得る。
3. 承認が得られるまでコードの編集や新規ファイルの作成を行わない。

--- ${file} の内容 ---
${content}"

jq -n --arg ctx "$instruction" \
  '{hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: $ctx}}'
