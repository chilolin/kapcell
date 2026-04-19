import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { fetchProfileStats } from "../fetchers";
import { ProfilePanel } from "./profile-panel";

export async function ProfileInsightsPanel() {
  const stats = await fetchProfileStats();

  return (
    <ProfilePanel flex={{ base: "1", lg: "0 0 300px" }} alignSelf="flex-start">
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
    </ProfilePanel>
  );
}
