import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuCalendar, LuMapPin, LuSparkles } from "react-icons/lu";
import type {
  ProfileActivity,
  ProfileShowcase,
  ProfileStat,
  UserProfile,
} from "../types";

type ProfileScreenProps = {
  user: UserProfile;
  stats: ProfileStat[];
  showcase: ProfileShowcase[];
  activities: ProfileActivity[];
};

export function ProfileScreen({
  user,
  stats,
  showcase,
  activities,
}: ProfileScreenProps) {
  return (
    <Stack gap={{ base: "12px", md: "24px" }}>
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

      <Flex direction={{ base: "column", lg: "row" }} gap={{ base: "3", md: "6" }} align="stretch">
        <Stack flex="1" gap={{ base: "3", md: "4" }}>
          <Box
            p={{ base: "4", md: "6" }}
            bg="surface.canvas"
            borderWidth={{ base: "0", md: "1px" }}
            borderColor="border.subtle"
            borderRadius={{ base: "0", md: "card" }}
            boxShadow={{ base: "none", md: "card" }}
            borderBottomWidth={{ base: "1px", md: "0" }}
          >
            <HStack gap="2" mb="4" color="green.600">
              <LuSparkles />
              <Heading as="h2" textStyle="sectionTitle" fontSize="22px">
                ハイライト
              </Heading>
            </HStack>
            <Stack gap="3">
              {showcase.map((item) => (
                <Flex
                  key={item.label}
                  justify="space-between"
                  align="center"
                  py="2"
                  borderBottom="1px solid"
                  borderColor="border.subtle"
                >
                  <Text textStyle="meta" fontSize="15px">
                    {item.label}
                  </Text>
                  <Text textStyle="label" fontSize="16px">
                    {item.value}
                  </Text>
                </Flex>
              ))}
            </Stack>
          </Box>

          <Box
            p={{ base: "4", md: "6" }}
            bg="surface.canvas"
            borderWidth={{ base: "0", md: "1px" }}
            borderColor="border.subtle"
            borderRadius={{ base: "0", md: "card" }}
            boxShadow={{ base: "none", md: "card" }}
            borderBottomWidth={{ base: "1px", md: "0" }}
          >
            <Heading as="h2" textStyle="sectionTitle" fontSize="22px" mb="4">
              最近のアクティビティ
            </Heading>
            <Stack gap="4">
              {activities.map((activity) => (
                <Stack
                  key={activity.id}
                  gap="2"
                  p={{ base: "0", md: "4" }}
                  pl={{ base: "3", md: "4" }}
                  bg={{ base: "transparent", md: "surface.muted" }}
                  borderRadius={{ base: "0", md: "input" }}
                  borderWidth={{ base: "0", md: "1px" }}
                  borderLeftWidth={{ base: "2px", md: "0" }}
                  borderColor="border.subtle"
                >
                  <HStack justify="space-between" align="center">
                    <Text textStyle="label" fontSize="18px">
                      {activity.title}
                    </Text>
                    <Badge bg="surface.tint" color="green.700" borderRadius="full" px="3">
                      {activity.tag}
                    </Badge>
                  </HStack>
                  <Text textStyle="body" fontSize={{ base: "18px", md: "20px" }}>
                    {activity.body}
                  </Text>
                  <Text textStyle="meta">{activity.time}</Text>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>

        <Box
          p={{ base: "4", md: "6" }}
          bg="surface.canvas"
          borderWidth={{ base: "0", md: "1px" }}
          borderColor="border.subtle"
          borderRadius={{ base: "0", md: "card" }}
          boxShadow={{ base: "none", md: "card" }}
          borderBottomWidth={{ base: "1px", md: "0" }}
          flex={{ base: "1", lg: "0 0 300px" }}
          alignSelf="flex-start"
        >
          <Heading as="h2" textStyle="sectionTitle" fontSize="22px" mb="4">
            インサイト
          </Heading>
          <Stack gap="0">
            {stats.map((stat, index) => (
              <Box
                key={stat.label}
                py={{ base: "3", md: "4" }}
                borderBottomWidth={index < stats.length - 1 ? "1px" : "0"}
                borderColor="border.subtle"
              >
                <Flex align="baseline" justify="space-between" gap="3">
                  <Text textStyle="meta">{stat.label}</Text>
                  <Text fontSize={{ base: "28px", md: "32px" }} fontWeight="700" lineHeight="1.1">
                    {stat.value}
                  </Text>
                </Flex>
                {stat.note ? (
                  <Text mt="1" textStyle="meta" color="green.700">
                    {stat.note}
                  </Text>
                ) : null}
              </Box>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
}
