import type { ProfileActivity, ProfileShowcase, ProfileStat, UserProfile } from "./types";

export const profileUser: UserProfile = {
  name: "Kapcell Team",
  handle: "@kapcell",
  role: "Product Team",
  bio: "モバイル体験を中心に、親しみやすく信頼できるコミュニケーションサービスを設計しています。",
  location: "Tokyo, Japan",
  joinedAt: "2024年4月",
  website: "kapcell.example.com",
};

export const profileStats: ProfileStat[] = [
  { label: "投稿", value: "128", note: "過去30日 +18" },
  { label: "フォロワー", value: "12.4K", note: "先週比 +4.2%" },
  { label: "フォロー中", value: "342" },
  { label: "総いいね", value: "86.9K" },
];

export const profileShowcase: ProfileShowcase[] = [
  { label: "専門領域", value: "モバイルUI / DX / 情報設計" },
  { label: "投稿頻度", value: "週5〜6回" },
  { label: "応答時間", value: "平均 45分以内" },
];

export const profileActivities: ProfileActivity[] = [
  {
    id: "activity-1",
    title: "フィード画面の改善案を公開",
    body: "タイムラインの可読性を上げるために、見出しと補助テキストのコントラストを再設計しました。",
    time: "2時間前",
    tag: "UI改善",
  },
  {
    id: "activity-2",
    title: "コミュニティ向けQ&Aセッションを実施",
    body: "デザインシステムの運用ルールとレビュー体制について、ライブで質問に回答しました。",
    time: "昨日",
    tag: "コミュニティ",
  },
  {
    id: "activity-3",
    title: "オンボーディング文言を更新",
    body: "初回利用時の離脱率を下げるため、タスクベースの案内文へ刷新。A/Bテストを準備中です。",
    time: "3日前",
    tag: "プロダクト",
  },
];
