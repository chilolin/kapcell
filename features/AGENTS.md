## Rules

- `features/` は機能ごとのロジックと UI を凝縮させる
- 各 feature 配下に `components/`, `hooks/`, `actions.ts`, `fetchers.ts`, `types.ts`, `schema.ts` などを colocate してよい
- 読み取りは利用箇所に colocate を優先し `fetchers.ts` に定義する
- Server Component の UI は必要データを各 component で `fetchers.ts` から取得してよい
- 同じデータを複数 component で使う場合は、親 Server Component で集約するか cache を使って重複取得を避ける
- 更新処理は `actions.ts` に置き、`'use server'` を使う
- `actions.ts` では validation / auth / mutation / revalidation を行う
- 複数 feature で再利用するものは `root/components/` または `root/lib/` に移す
- N+1 を避けるため、まず join / include / set-based query を優先する
- 同一 request 内で key-based fetch が多発する場合は per-request DataLoader を検討する
