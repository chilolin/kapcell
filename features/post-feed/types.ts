import type { IconType } from "react-icons";

export type NavigationItem = {
  label: string;
  icon: IconType;
  active?: boolean;
};

export type TrendingTopic = {
  category: string;
  title: string;
  posts: string;
};

export type SuggestedUser = {
  name: string;
  handle: string;
  bio: string;
};

export type PostReply = {
  id: string;
  author: string;
  handle: string;
  time: string;
  body: string;
};

export type TimelinePost = {
  id: string;
  author: string;
  handle: string;
  time: string;
  body: string;
  tags: string[];
  replies: PostReply[];
  stats: {
    replies: number;
    likes: number;
    impressions: string;
  };
};
