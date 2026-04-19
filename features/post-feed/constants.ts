import {
  LuBell,
  LuBookmark,
  LuHouse,
  LuMail,
  LuTrendingUp,
  LuUserRound,
} from "react-icons/lu";
import type {
  NavigationItem,
  SuggestedUser,
  TimelinePost,
  TrendingTopic,
} from "./types";

export const navigationItems: NavigationItem[] = [
  { label: "ホーム", icon: LuHouse, active: true },
  { label: "話題", icon: LuTrendingUp },
  { label: "通知", icon: LuBell },
  { label: "メッセージ", icon: LuMail },
  { label: "保存済み", icon: LuBookmark },
  { label: "プロフィール", icon: LuUserRound },
];

export const trendingTopics: TrendingTopic[] = [
  { category: "テクノロジー", title: "生成AIの業務利用", posts: "18.2K posts" },
  { category: "スタートアップ", title: "小さなチームの開発体制", posts: "9,840 posts" },
  { category: "デザイン", title: "モバイルUIの再設計", posts: "6,291 posts" },
];

export const suggestedUsers: SuggestedUser[] = [
  { name: "Mika Sato", handle: "@mika_ui", bio: "UIデザイナー / 東京" },
  {
    name: "Kenji Ito",
    handle: "@kenji_builds",
    bio: "フロントエンドとプロダクト開発",
  },
  { name: "Aoi Kim", handle: "@aoi_pm", bio: "PM / コミュニティ運営" },
];

export const timeline: TimelinePost[] = [
  {
    id: "post-haru-dev",
    author: "Haru Watanabe",
    handle: "@haru_dev",
    time: "2時間",
    body:
      "App Router で画面を作るなら、まず情報密度のバランスを決めてからコンポーネントに落とすのが早い。今日は SNS 画面の再設計を進めています。",
    tags: ["#Nextjs", "#ChakraUI"],
    replies: [
      {
        id: "reply-haru-1",
        author: "Mika Sato",
        handle: "@mika_ui",
        time: "35分",
        body:
          "情報設計から入るのはかなり共感です。先に優先順位を決めると UI の迷いが減りますね。",
      },
    ],
    stats: { replies: 24, likes: 182, impressions: "12.8K" },
  },
  {
    id: "post-yuna-product",
    author: "Yuna Park",
    handle: "@yuna_product",
    time: "4時間",
    body:
      "良いフィード画面は、投稿本文よりも前に '誰の発信か' と 'いま何が起きているか' が伝わる。右カラムの文脈設計が重要。",
    tags: ["#ProductDesign", "#FeedUX"],
    replies: [
      {
        id: "reply-yuna-1",
        author: "Kenji Ito",
        handle: "@kenji_builds",
        time: "1時間",
        body:
          "右カラムの役割を決めておくと、本文の見せ方も自然に整理されますね。",
      },
      {
        id: "reply-yuna-2",
        author: "Aoi Kim",
        handle: "@aoi_pm",
        time: "48分",
        body: "文脈の補助線があると、初見ユーザーも入りやすくなります。",
      },
    ],
    stats: { replies: 12, likes: 96, impressions: "8.1K" },
  },
  {
    id: "post-sho-notes",
    author: "Sho Tanaka",
    handle: "@sho_notes",
    time: "昨日",
    body:
      "X のような UI でも、そのまま模倣するより自社ブランドに寄せた方が長く使える。今回はグリーンを軸に、親しみやすさを残した構成にしてみた。",
    tags: ["#Brand", "#UI"],
    replies: [],
    stats: { replies: 31, likes: 244, impressions: "16.4K" },
  },
];
