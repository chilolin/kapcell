<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project Overview

Next.js + TypeScript を用いたスマホ向けウェブアプリケーション。

- 実装前に必ず `DESIGN.md` を参照する
- UI は Chakra UI を使用する
- パスエイリアス: `@/*` からのインポートはリポジトリのルートディレクトリに対応する（tsconfig.jsonを参照）

## Architecture

- `app/` は routing / layout / metadata / route handlers / page composition の責務を持つ
- `features/` は feature ごとの UI / business logic / fetchers / actions / types / hooks を持つ
- `components/` は複数 feature で再利用する shared UI を持つ
- `lib/` は shared utilities / schema / auth / db helpers / formatters を持つ
- `app/` にビジネスロジックを溜め込まない
- 共有化は「2つ以上の feature で安定して再利用される」ことを目安に行う
- 依存方向は原則 `app -> features -> lib` とし、`lib` から `features` や `app` へ逆依存しない

## Data Fetching

- Server Component は必要なデータ取得を利用箇所に colocate してよい
- 取得処理は `features/<feature>/fetchers.ts` に定義し、component から呼び出す
- `app/*/page.tsx` は route composition を優先し、feature の生データを直接組み立てない
- 同一 request 内で同じデータ依存が複数箇所にある場合は、1段上で集約して props 配布するか cache 戦略を使う
- `use client` の component では直接データ取得せず、Server Component から props を受け取る

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
- 依存追加・更新は必要性が明確な場合に限る
- 一時しのぎの重複実装や過度な inline style を増やさない
- 仕様に迷ったら `DESIGN.md` を優先する
