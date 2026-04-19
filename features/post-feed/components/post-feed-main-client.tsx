"use client";

import { useState } from "react";
import { Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import type { TimelinePost } from "../types";
import { updateTimelineWithReply } from "../utils/update-timeline-with-reply";
import { FeedComposer } from "./feed-composer";
import { TimelinePostItem } from "./timeline-post-item";

type PostFeedMainClientProps = {
  timeline: TimelinePost[];
};

export function PostFeedMainClient({ timeline }: PostFeedMainClientProps) {
  const [posts, setPosts] = useState(timeline);

  const handleReplySubmit = (postId: string, body: string) => {
    const trimmedBody = body.trim();
    if (!trimmedBody) {
      return;
    }

    setPosts((currentPosts) => updateTimelineWithReply(currentPosts, postId, trimmedBody));
  };

  return (
    <Stack
      flex="1"
      minW="0"
      gap="0"
      overflow={{ base: "visible", md: "hidden" }}
      bg={{ base: "surface.canvas", md: "rgba(255,255,255,0.92)" }}
      borderWidth={{ base: "0", md: "1px" }}
      borderColor="border.subtle"
      boxShadow={{ base: "none", md: "floating" }}
      backdropFilter={{ base: "none", md: "blur(16px)" }}
      borderRadius={{ base: "0", md: "shellLg" }}
    >
      <Flex
        align="center"
        justify="space-between"
        px={{ base: "0", md: "24px" }}
        py={{ base: "3", md: "4" }}
        borderBottom="1px solid"
        borderColor="border.subtle"
        bg={{ base: "surface.canvas", md: "rgba(255,255,255,0.85)" }}
      >
        <Stack gap="0">
          <Heading
            as="h2"
            textStyle={{ base: "sectionTitle", md: "feedTitle" }}
            color="text.primary"
          >
            ホーム
          </Heading>
          <Text textStyle="meta">あなたに合わせて厳選した投稿</Text>
        </Stack>
        <IconButton
          aria-label="Search feed"
          borderRadius="full"
          variant="outline"
          borderColor="border.subtle"
        >
          <LuSearch />
        </IconButton>
      </Flex>

      <FeedComposer />

      <Stack gap="0">
        {posts.map((post, index) => (
          <TimelinePostItem
            key={post.id}
            post={post}
            showDivider={index < posts.length - 1}
            onReplySubmit={handleReplySubmit}
          />
        ))}
      </Stack>
    </Stack>
  );
}
