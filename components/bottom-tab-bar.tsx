"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { LuHouse, LuUserRound } from "react-icons/lu";
import type { IconType } from "react-icons";

type TabItem = {
  label: string;
  href: string;
  icon: IconType;
};

const tabs: TabItem[] = [
  { label: "ホーム", href: "/", icon: LuHouse },
  { label: "プロフィール", href: "/profile", icon: LuUserRound },
];

export function BottomTabBar() {
  const pathname = usePathname();

  return (
    <Box
      display={{ base: "block", md: "none" }}
      position="fixed"
      left="0"
      right="0"
      bottom="0"
      zIndex="1000"
      borderTopWidth="1px"
      borderColor="border.subtle"
      bg="rgba(255,255,255,0.96)"
      backdropFilter="blur(12px)"
      px="3"
      py="2"
      pb="max(8px, env(safe-area-inset-bottom))"
    >
      <HStack align="stretch" justify="space-between" gap="2">
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname === tab.href || pathname.startsWith(`${tab.href}/`);

          return (
            <Link
              key={tab.href}
              asChild
              flex="1"
              borderRadius="input"
              bg={active ? "surface.tintStrong" : "transparent"}
              color={active ? "green.700" : "text.secondary"}
              _hover={{ textDecoration: "none", bg: "surface.tint" }}
              px="3"
              py="2"
            >
              <NextLink href={tab.href}>
                <HStack justify="center" gap="2">
                  <Icon as={tab.icon} boxSize="5" />
                  <Text fontSize="14px" fontWeight={active ? "700" : "500"}>
                    {tab.label}
                  </Text>
                </HStack>
              </NextLink>
            </Link>
          );
        })}
      </HStack>
    </Box>
  );
}
