import { Box, type BoxProps } from "@chakra-ui/react";

type ProfilePanelProps = BoxProps;

export function ProfilePanel(props: ProfilePanelProps) {
  return (
    <Box
      p={{ base: "4", md: "6" }}
      bg="surface.canvas"
      borderWidth={{ base: "0", md: "1px" }}
      borderColor="border.subtle"
      borderRadius={{ base: "0", md: "card" }}
      boxShadow={{ base: "none", md: "card" }}
      borderBottomWidth={{ base: "1px", md: "0" }}
      {...props}
    />
  );
}
