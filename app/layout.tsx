import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { BottomTabBar } from "@/components/bottom-tab-bar";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "Kapcell Social",
  description: "X のような SNS 形式をベースにした Kapcell のソーシャルフィード画面",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Provider>
          <Box pb={{ base: "84px", md: "0" }}>{children}</Box>
          <BottomTabBar />
        </Provider>
      </body>
    </html>
  );
}
