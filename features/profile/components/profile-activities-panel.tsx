import { Badge, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { fetchProfileActivities } from "../fetchers";
import { ProfilePanel } from "./profile-panel";

export async function ProfileActivitiesPanel() {
  const activities = await fetchProfileActivities();

  return (
    <ProfilePanel>
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
    </ProfilePanel>
  );
}
