import { HStack, Text } from "@chakra-ui/react";

type StatPillProps = {
  label: string;
  value: number | string;
};

export function StatPill({ label, value }: StatPillProps) {
  return (
    <HStack gap="2" color="text.secondary" fontSize="14px">
      <Text fontWeight="700" color="text.primary">
        {value}
      </Text>
      <Text>{label}</Text>
    </HStack>
  );
}
