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
  Textarea,
  Text,
} from "@chakra-ui/react";
import { LuCircleEllipsis, LuMessageCircle } from "react-icons/lu";
import type { TimelinePost } from "../types";
import { StatPill } from "./stat-pill";

type TimelinePostItemProps = {
  post: TimelinePost;
  showDivider: boolean;
  onReplySubmit: (postId: string, body: string) => void;
};

export function TimelinePostItem({
  post,
  showDivider,
  onReplySubmit,
}: TimelinePostItemProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyBody, setReplyBody] = useState("");

  const handleReplySubmit = () => {
    const trimmedBody = replyBody.trim();
    if (!trimmedBody) {
      return;
    }

    onReplySubmit(post.id, trimmedBody);
    setReplyBody("");
    setIsReplying(false);
  };

  return (
    <Box px={{ base: "16px", md: "24px" }} py="6">
      <Flex align="flex-start" gap="4">
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
            <Text fontSize="14px" color="text.secondary">
              {post.replies.length > 0
                ? `${post.replies.length}件の返信を表示`
                : "まだ返信はありません"}
            </Text>
          </HStack>

          {isReplying ? (
            <Stack
              gap="3"
              p="4"
              bg="surface.composer"
              borderWidth="1px"
              borderColor="border.subtle"
              borderRadius="card"
            >
              <Textarea
                value={replyBody}
                onChange={(event) => setReplyBody(event.target.value)}
                placeholder={`${post.author}さんへ返信を書く`}
                variant="subtle"
                colorPalette="green"
                size="md"
                autoresize
                minH="96px"
                bg="surface.canvas"
                borderRadius="input"
              />
              <Flex justify="space-between" align="center" gap="3" wrap="wrap">
                <Text fontSize="14px" color="text.secondary">
                  この返信はこのポストのスレッドに表示されます
                </Text>
                <Button
                  colorPalette="green"
                  borderRadius="full"
                  px="6"
                  onClick={handleReplySubmit}
                  disabled={!replyBody.trim()}
                >
                  返信
                </Button>
              </Flex>
            </Stack>
          ) : null}

          {post.replies.length > 0 ? (
            <Stack gap="4" pt="1">
              {post.replies.map((reply) => (
                <Flex key={reply.id} align="flex-start" gap="3">
                  <Avatar.Root size="sm" colorPalette="green" variant="subtle">
                    <Avatar.Fallback name={reply.author} />
                  </Avatar.Root>
                  <Stack
                    gap="2"
                    flex="1"
                    p="4"
                    bg="surface.muted"
                    borderRadius="card"
                  >
                    <HStack gap="2" wrap="wrap">
                      <Text fontSize="15px" fontWeight="700" color="text.primary">
                        {reply.author}
                      </Text>
                      <Text fontSize="14px" color="text.secondary">
                        {reply.handle}
                      </Text>
                      <Text fontSize="14px" color="text.disabled">
                        · {reply.time}
                      </Text>
                    </HStack>
                    <Text
                      fontSize={{ base: "15px", md: "16px" }}
                      lineHeight="1.6"
                      color="text.primary"
                      wordBreak="break-word"
                    >
                      {reply.body}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </Stack>
          ) : null}
        </Stack>
      </Flex>
      {showDivider ? <Separator mt="6" borderColor="border.subtle" /> : null}
    </Box>
  );
}
