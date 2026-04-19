import type { PostReply, TimelinePost } from "../types";

const REPLY_AUTHOR = "Kapcell Team";
const REPLY_HANDLE = "@kapcell";
const REPLY_TIME = "たった今";

function buildReply(postId: string, replyCount: number, body: string): PostReply {
  return {
    id: `${postId}-reply-${replyCount + 1}`,
    author: REPLY_AUTHOR,
    handle: REPLY_HANDLE,
    time: REPLY_TIME,
    body,
  };
}

export function updateTimelineWithReply(
  posts: TimelinePost[],
  postId: string,
  body: string
): TimelinePost[] {
  return posts.map((post) => {
    if (post.id !== postId) {
      return post;
    }

    return {
      ...post,
      replies: [...post.replies, buildReply(post.id, post.replies.length, body)],
      stats: {
        ...post.stats,
        replies: post.stats.replies + 1,
      },
    };
  });
}
