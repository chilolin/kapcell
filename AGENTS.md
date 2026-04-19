<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Overview

Next.js + TypeScript を用いたスマホ向けウェブアプリケーション。

- 実装前に必ず `DESIGN.md` を参照する
- UI は Chakra UI を使用する
- パスエイリアス: `@/*` からのインポートはリポジトリのルートディレクトリに対応する（tsconfig.jsonを参照）

## Environment

- 本番デプロイは `Dockerfile` を使用する
- 開発環境は `compose.yaml` を使用する
- 検証はコンテナ内で行う

## Commands

- Install: `docker compose run --rm web pnpm install`
- Dev: `docker compose up web`
- Build: `docker compose run --rm web pnpm build`
- Start: `docker compose run --rm web pnpm start`
- Lint: `docker compose run --rm web pnpm lint`

## Boundaries

- `.env` ファイルを変更しない
- `pnpm-lock.yaml` を手動編集しない
