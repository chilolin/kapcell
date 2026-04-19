import { Avatar, Badge, Box, Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { LuCalendar, LuMapPin } from "react-icons/lu";
import { fetchProfileUser } from "../fetchers";

export async function ProfileHeaderCard() {
  const user = await fetchProfileUser();

  return (
    <Box
      p={{ base: "4", md: "6" }}
      bg={{ base: "surface.canvas", md: "rgba(255,255,255,0.92)" }}
      borderWidth={{ base: "0", md: "1px" }}
      borderColor="border.subtle"
      boxShadow={{ base: "none", md: "floating" }}
      backdropFilter={{ base: "none", md: "blur(16px)" }}
      borderRadius={{ base: "0", md: "shell" }}
      borderBottomWidth={{ base: "1px", md: "0" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        gap={{ base: "4", md: "6" }}
      >
        <HStack align="flex-start" gap="4">
          <Avatar.Root size="2xl" colorPalette="green" variant="subtle">
            <Avatar.Fallback name={user.name} />
          </Avatar.Root>
          <Stack gap="2">
            <Badge
              bg="green.50"
              color="green.700"
              px="3"
              py="1"
              borderRadius="full"
              width="fit-content"
            >
              {user.role}
            </Badge>
            <Heading as="h1" textStyle={{ base: "sectionTitle", md: "feedTitle" }}>
              {user.name}
            </Heading>
            <Text textStyle="meta" fontSize="16px">
              {user.handle}
            </Text>
          </Stack>
        </HStack>

        <Button
          h="48px"
          px="8"
          borderRadius="input"
          bg="green.500"
          color="white"
          fontWeight="700"
          _hover={{ bg: "green.600" }}
        >
          フォロー中
        </Button>
      </Flex>

      <Text mt={{ base: "4", md: "6" }} textStyle={{ base: "label", md: "body" }} fontWeight="400">
        {user.bio}
      </Text>

      <HStack mt="4" gap="4" wrap="wrap" color="text.secondary">
        <HStack gap="2">
          <LuMapPin />
          <Text textStyle="meta">{user.location}</Text>
        </HStack>
        <HStack gap="2">
          <LuCalendar />
          <Text textStyle="meta">参加: {user.joinedAt}</Text>
        </HStack>
        <Text textStyle="meta">Web: {user.website}</Text>
      </HStack>
    </Box>
  );
}
