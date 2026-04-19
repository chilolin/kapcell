import { Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { LuSparkles } from "react-icons/lu";
import { fetchProfileShowcase } from "../fetchers";
import { ProfilePanel } from "./profile-panel";

export async function ProfileShowcasePanel() {
  const showcase = await fetchProfileShowcase();

  return (
    <ProfilePanel>
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
    </ProfilePanel>
  );
}
