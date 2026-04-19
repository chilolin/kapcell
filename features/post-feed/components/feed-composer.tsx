"use client";

import { Avatar, Badge, Button, Flex, HStack, IconButton, Input, Stack } from "@chakra-ui/react";
import { LuImage } from "react-icons/lu";

export function FeedComposer() {
  return (
    <Stack
      gap="4"
      px={{ base: "0", md: "24px" }}
      py={{ base: "12px", md: "24px" }}
      bg={{
        base: "surface.canvas",
        md: "linear-gradient(135deg, {colors.surface.composer} 0%, {colors.surface.canvas} 100%)",
      }}
      borderBottom="1px solid"
      borderColor="border.subtle"
    >
      <Flex align="flex-start" gap={{ base: "3", md: "4" }}>
        <Avatar.Root size="lg" colorPalette="green" variant="subtle">
          <Avatar.Fallback name="Kapcell Team" />
        </Avatar.Root>
        <Stack flex="1" gap={{ base: "3", md: "4" }}>
          <Input
            placeholder="いまどうしてる？"
            variant="subtle"
            size="lg"
            bg="surface.canvas"
            borderRadius="input"
            colorPalette="green"
          />
          <Flex justify="space-between" align="center" wrap="wrap" gap="3">
            <HStack gap="2" color="green.500">
              <IconButton
                aria-label="Add image"
                variant="ghost"
                borderRadius="full"
                color="green.500"
              >
                <LuImage />
              </IconButton>
              <Badge colorPalette="green" variant="subtle" borderRadius="full" px="3" py="1">
                画像
              </Badge>
              <Badge colorPalette="green" variant="subtle" borderRadius="full" px="3" py="1">
                投票
              </Badge>
            </HStack>
            <Button
              bg="green.500"
              color="white"
              borderRadius="full"
              px="8"
              _hover={{ bg: "green.600" }}
            >
              ポスト
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}
