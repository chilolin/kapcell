## Rules

- `app/` は route layer として使う
- `app/` には主に `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, metadata, providers, route composition を置く
- page は薄く保ち、feature の組み立てと route ごとの責務に集中する
- Chakra UI の provider 配線は `app/layout.tsx` で行う
