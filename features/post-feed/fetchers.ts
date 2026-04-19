import { navigationItems, suggestedUsers, timeline, trendingTopics } from "./constants";
import type { NavigationItem, SuggestedUser, TimelinePost, TrendingTopic } from "./types";

export async function fetchNavigationItems(): Promise<NavigationItem[]> {
  return navigationItems;
}

export async function fetchTimeline(): Promise<TimelinePost[]> {
  return timeline;
}

export async function fetchTrendingTopics(): Promise<TrendingTopic[]> {
  return trendingTopics;
}

export async function fetchSuggestedUsers(): Promise<SuggestedUser[]> {
  return suggestedUsers;
}
