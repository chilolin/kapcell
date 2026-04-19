import { Flex, Stack } from "@chakra-ui/react";
import { ProfileActivitiesPanel } from "./profile-activities-panel";
import { ProfileHeaderCard } from "./profile-header-card";
import { ProfileInsightsPanel } from "./profile-insights-panel";
import { ProfileShowcasePanel } from "./profile-showcase-panel";

export function ProfileScreen() {
  return (
    <Stack gap={{ base: "12px", md: "24px" }}>
      <ProfileHeaderCard />

      <Flex direction={{ base: "column", lg: "row" }} gap={{ base: "3", md: "6" }} align="stretch">
        <Stack flex="1" gap={{ base: "3", md: "4" }}>
          <ProfileShowcasePanel />
          <ProfileActivitiesPanel />
        </Stack>
        <ProfileInsightsPanel />
      </Flex>
    </Stack>
  );
}
