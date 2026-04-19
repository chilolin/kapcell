"use client";

import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuCircleEllipsis, LuMessageCircle } from "react-icons/lu";
import type { TimelinePost } from "../types";
import { PostReplies } from "./post-replies";
import { PostReplyComposer } from "./post-reply-composer";
import { StatPill } from "./stat-pill";

type TimelinePostItemProps = {
  post: TimelinePost;
  showDivider: boolean;
  onReplySubmit: (postId: string, body: string) => void;
};

export function TimelinePostItem({ post, showDivider, onReplySubmit }: TimelinePostItemProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [isRepliesVisible, setIsRepliesVisible] = useState(post.replies.length > 0);
  const [replyBody, setReplyBody] = useState("");

  const handleReplySubmit = () => {
    const trimmedBody = replyBody.trim();
    if (!trimmedBody) {
      return;
    }

    onReplySubmit(post.id, trimmedBody);
    setReplyBody("");
    setIsReplying(false);
    setIsRepliesVisible(true);
  };

  return (
    <Box px={{ base: "0", md: "24px" }} py={{ base: "4", md: "6" }}>
      <Flex align="flex-start" gap={{ base: "3", md: "4" }}>
        <Avatar.Root size="lg" colorPalette="green" variant="subtle">
          <Avatar.Fallback name={post.author} />
        </Avatar.Root>
        <Stack flex="1" gap="3">
          <Flex justify="space-between" gap="3" align="flex-start">
            <Stack gap="0">
              <HStack gap="2" wrap="wrap">
                <Text textStyle="nav" fontWeight="700" color="text.primary">
                  {post.author}
                </Text>
                <Text fontSize="15px" color="text.secondary">
                  {post.handle}
                </Text>
                <Text fontSize="15px" color="text.disabled">
                  · {post.time}
                </Text>
              </HStack>
              <Text
                textStyle="postBody"
                fontSize={{ base: "17px", md: "20px" }}
                lineHeight="1.55"
                color="text.primary"
                wordBreak="break-word"
              >
                {post.body}
              </Text>
            </Stack>
            <IconButton
              aria-label="More options"
              variant="ghost"
              borderRadius="full"
              color="text.secondary"
            >
              <LuCircleEllipsis />
            </IconButton>
          </Flex>

          <HStack gap="2" wrap="wrap">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                colorPalette="green"
                variant="subtle"
                borderRadius="full"
                px="3"
                py="1"
              >
                {tag}
              </Badge>
            ))}
          </HStack>

          <HStack gap={{ base: "4", md: "6" }} wrap="wrap">
            <StatPill label="返信" value={post.stats.replies} />
            <StatPill label="いいね" value={post.stats.likes} />
            <StatPill label="表示" value={post.stats.impressions} />
          </HStack>

          <HStack justify="space-between" align="center" wrap="wrap" gap="3">
            <HStack gap="4" wrap="wrap">
              <Button
                variant="ghost"
                colorPalette="green"
                borderRadius="full"
                px="0"
                fontWeight="700"
                onClick={() => setIsReplying((current) => !current)}
              >
                <LuMessageCircle />
                {isReplying ? "閉じる" : "返信する"}
              </Button>
              {post.replies.length > 0 ? (
                <Button
                  variant="plain"
                  colorPalette="green"
                  borderRadius="full"
                  px="0"
                  fontWeight="700"
                  onClick={() => setIsRepliesVisible((current) => !current)}
                >
                  {isRepliesVisible ? "返信を隠す" : "返信を表示"}
                </Button>
              ) : null}
            </HStack>
            <Text fontSize="14px" color="text.secondary">
              {post.replies.length > 0
                ? `${post.replies.length}件の返信${isRepliesVisible ? "を表示中" : "は非表示"}`
                : "まだ返信はありません"}
            </Text>
          </HStack>

          {isReplying ? (
            <PostReplyComposer
              author={post.author}
              value={replyBody}
              onChange={setReplyBody}
              onSubmit={handleReplySubmit}
            />
          ) : null}

          {post.replies.length > 0 && isRepliesVisible ? (
            <PostReplies replies={post.replies} />
          ) : null}
        </Stack>
      </Flex>
      {showDivider ? <Separator mt={{ base: "4", md: "6" }} borderColor="border.subtle" /> : null}
    </Box>
  );
}
