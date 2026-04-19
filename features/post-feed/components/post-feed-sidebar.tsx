import { Avatar, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { fetchNavigationItems } from "../fetchers";

export async function PostFeedSidebar() {
  const navigationItems = await fetchNavigationItems();

  return (
    <Stack
      display={{ base: "none", lg: "flex" }}
      position="sticky"
      top="24px"
      flex="0 0 240px"
      gap="6"
      py="6"
    >
      <Stack gap="2">
        <Text
          textStyle="meta"
          letterSpacing="0.18em"
          textTransform="uppercase"
          color="green.500"
          fontWeight="700"
        >
          Kapcell Social
        </Text>
        <Heading as="h1" textStyle="hero" color="text.primary">
          Green Feed
        </Heading>
      </Stack>

      <Stack gap="2">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            justifyContent="flex-start"
            variant="ghost"
            h="56px"
            px="4"
            borderRadius="input"
            bg={item.active ? "surface.tintStrong" : "transparent"}
            color="text.primary"
            _hover={{ bg: "surface.tint" }}
          >
            <item.icon />
            <Text ml="3" textStyle="nav" fontWeight={item.active ? "700" : "500"}>
              {item.label}
            </Text>
          </Button>
        ))}
      </Stack>

      <Button
        bg="green.500"
        color="white"
        borderRadius="full"
        h="56px"
        fontWeight="700"
        _hover={{ bg: "green.600" }}
      >
        投稿する
      </Button>

      <Flex align="center" gap="3" p="4" layerStyle="card" borderRadius="panel">
        <Avatar.Root size="lg" colorPalette="green" variant="subtle">
          <Avatar.Fallback name="Kapcell Team" />
        </Avatar.Root>
        <Stack gap="0">
          <Text textStyle="label" color="text.primary">
            Kapcell Team
          </Text>
          <Text textStyle="meta">@kapcell</Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
