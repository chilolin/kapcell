import { Box, Flex } from "@chakra-ui/react";
import {
  navigationItems,
  suggestedUsers,
  timeline,
  trendingTopics,
} from "@/features/post-feed";
import {
  PostFeedAside,
  PostFeedMain,
  PostFeedSidebar,
} from "@/features/post-feed/components";

export default function Home() {
  return (
    <Box
      minH="100vh"
      bg={{
        base: "surface.canvas",
        md: "linear-gradient(180deg, {colors.surface.tint} 0%, {colors.surface.muted} 28%, {colors.surface.muted} 100%)",
      }}
    >
      <Flex
        maxW="1120px"
        mx="auto"
        px={{ base: "16px", md: "24px" }}
        py={{ base: "0", md: "24px" }}
        gap={{ base: "16px", lg: "24px" }}
        align="flex-start"
      >
        <PostFeedSidebar navigationItems={navigationItems} />
        <PostFeedMain timeline={timeline} />
        <PostFeedAside
          suggestedUsers={suggestedUsers}
          trendingTopics={trendingTopics}
        />
      </Flex>
    </Box>
  );
}
