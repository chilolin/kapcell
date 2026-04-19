## Rules

- `features/` は機能ごとのロジックと UI を凝縮させる
- 各 feature 配下に UI / hooks / actions / types を colocate する
- 複数 feature で再利用するものは `root/components/` または `root/lib/` に移す
- feature component は受け取った props で描画することを優先し、route 情報や fetch 実装を抱え込みすぎない
