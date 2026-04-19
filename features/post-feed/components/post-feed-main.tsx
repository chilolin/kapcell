import { fetchTimeline } from "../fetchers";
import { PostFeedMainClient } from "./post-feed-main-client";

export async function PostFeedMain() {
  const timeline = await fetchTimeline();

  return <PostFeedMainClient timeline={timeline} />;
}
