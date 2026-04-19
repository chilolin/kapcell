"use client";

import { Button, Flex, Stack, Text, Textarea } from "@chakra-ui/react";

type PostReplyComposerProps = {
  author: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export function PostReplyComposer({ author, value, onChange, onSubmit }: PostReplyComposerProps) {
  return (
    <Stack
      gap="3"
      p={{ base: "0", md: "4" }}
      bg={{ base: "transparent", md: "surface.composer" }}
      borderWidth={{ base: "0", md: "1px" }}
      borderColor="border.subtle"
      borderRadius={{ base: "0", md: "card" }}
    >
      <Textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={`${author}さんへ返信を書く`}
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
          onClick={onSubmit}
          disabled={!value.trim()}
        >
          返信
        </Button>
      </Flex>
    </Stack>
  );
}
