import { Box, Container } from "@chakra-ui/react";
import type { Metadata } from "next";
import { ProfileScreen } from "@/features/profile/components";

export const metadata: Metadata = {
  title: "プロフィール | Kapcell Social",
  description: "Kapcell Social のプロフィール画面",
};

export default function ProfilePage() {
  return (
    <Box
      minH="100vh"
      bg={{
        base: "surface.canvas",
        md: "linear-gradient(180deg, {colors.surface.tint} 0%, {colors.surface.muted} 36%, {colors.surface.muted} 100%)",
      }}
      py={{ base: "0", md: "24px" }}
    >
      <Container maxW="1120px" px={{ base: "16px", md: "24px" }}>
        <ProfileScreen />
      </Container>
    </Box>
  );
}
