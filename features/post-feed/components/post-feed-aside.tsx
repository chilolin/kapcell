import { Avatar, Box, Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { LuSparkles } from "react-icons/lu";
import { fetchSuggestedUsers, fetchTrendingTopics } from "../fetchers";

export async function PostFeedAside() {
  const [suggestedUsers, trendingTopics] = await Promise.all([
    fetchSuggestedUsers(),
    fetchTrendingTopics(),
  ]);

  return (
    <Stack
      display={{ base: "none", xl: "flex" }}
      position="sticky"
      top="24px"
      flex="0 0 320px"
      gap="6"
    >
      <Box p="6" layerStyle="panel">
        <Heading as="h3" textStyle="sectionTitle" mb="4">
          今起きていること
        </Heading>
        <Stack gap="4">
          {trendingTopics.map((topic) => (
            <Box key={topic.title}>
              <Text textStyle="meta">{topic.category}</Text>
              <Text textStyle="nav" fontWeight="700" color="text.primary">
                {topic.title}
              </Text>
              <Text textStyle="meta">{topic.posts}</Text>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box p="6" layerStyle="panel">
        <HStack justify="space-between" mb="4">
          <Heading as="h3" textStyle="sectionTitle">
            おすすめユーザー
          </Heading>
          <LuSparkles color="var(--chakra-colors-green-500)" />
        </HStack>
        <Stack gap="4">
          {suggestedUsers.map((user) => (
            <Flex key={user.handle} align="center" justify="space-between" gap="3">
              <HStack gap="3" minW="0">
                <Avatar.Root size="md" colorPalette="green" variant="subtle">
                  <Avatar.Fallback name={user.name} />
                </Avatar.Root>
                <Stack gap="0" minW="0">
                  <Text textStyle="label" truncate>
                    {user.name}
                  </Text>
                  <Text textStyle="meta" truncate>
                    {user.handle}
                  </Text>
                  <Text fontSize="13px" color="text.secondary" truncate>
                    {user.bio}
                  </Text>
                </Stack>
              </HStack>
              <Button
                size="sm"
                borderRadius="full"
                bg="text.primary"
                color="white"
                _hover={{ bg: "blackAlpha.800" }}
              >
                フォロー
              </Button>
            </Flex>
          ))}
        </Stack>
      </Box>

      <Box
        p="6"
        borderRadius="shell"
        bg="linear-gradient(135deg, {colors.green.500} 0%, {colors.green.600} 100%)"
        color="white"
        boxShadow="accent"
      >
        <Text
          textStyle="meta"
          color="white"
          fontWeight="700"
          letterSpacing="0.12em"
          textTransform="uppercase"
        >
          Creator Note
        </Text>
        <Heading as="h3" fontSize="30px" lineHeight="1.1" mt="3" mb="3">
          会話が続く UI を作る
        </Heading>
        <Text textStyle="label" fontWeight="400" lineHeight="1.6" opacity="0.96">
          投稿、文脈、発見を 1 画面にまとめた、X ライクなコミュニケーション画面です。
        </Text>
        <Button
          mt="5"
          bg="white"
          color="green.500"
          borderRadius="full"
          fontWeight="700"
          _hover={{ bg: "surface.composer" }}
        >
          詳しく見る
        </Button>
      </Box>
    </Stack>
  );
}
