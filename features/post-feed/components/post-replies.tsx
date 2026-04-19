import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import type { PostReply } from "../types";

type PostRepliesProps = {
  replies: PostReply[];
};

export function PostReplies({ replies }: PostRepliesProps) {
  return (
    <Stack gap={{ base: "3", md: "4" }} pt="1">
      {replies.map((reply) => (
        <Flex key={reply.id} align="flex-start" gap="3">
          <Avatar.Root size="sm" colorPalette="green" variant="subtle">
            <Avatar.Fallback name={reply.author} />
          </Avatar.Root>
          <Stack
            gap="2"
            flex="1"
            p={{ base: "0", md: "4" }}
            pl={{ base: "3", md: "4" }}
            bg={{ base: "transparent", md: "surface.muted" }}
            borderRadius={{ base: "0", md: "card" }}
            borderLeftWidth={{ base: "2px", md: "0" }}
            borderColor="green.100"
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
  );
}
