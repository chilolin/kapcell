import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

export const theme = createSystem(
  defaultConfig,
  defineConfig({
    theme: {
      tokens: {
        colors: {
          green: {
            50: { value: "#eefaf2" },
            100: { value: "#d8f5e2" },
            200: { value: "#b3ebc5" },
            300: { value: "#82dd9f" },
            400: { value: "#40d06d" },
            500: { value: "#06c755" },
            600: { value: "#05b34c" },
            700: { value: "#04863a" },
            800: { value: "#03632c" },
            900: { value: "#02431d" },
            950: { value: "#012410" },
          },
          text: {
            primary: { value: "#000000" },
            secondary: { value: "#666666" },
            disabled: { value: "#999999" },
          },
          border: {
            subtle: { value: "#e5e5e5" },
          },
          surface: {
            canvas: { value: "#ffffff" },
            muted: { value: "#f7f8f9" },
            tint: { value: "#eefaf2" },
            tintStrong: { value: "#e9f9ef" },
            composer: { value: "#f5fff8" },
          },
        },
        fonts: {
          body: {
            value:
              '"SF Pro Text", "SF Pro Display", Arial, "Noto Sans JP", "Noto Sans KR", sans-serif',
          },
          heading: {
            value:
              '"SF Pro Text", "SF Pro Display", Arial, "Noto Sans JP", "Noto Sans KR", sans-serif',
          },
        },
        radii: {
          card: { value: "12px" },
          panel: { value: "20px" },
          shell: { value: "24px" },
          shellLg: { value: "32px" },
          input: { value: "16px" },
          full: { value: "999px" },
        },
        shadows: {
          card: { value: "0 2px 8px rgba(0,0,0,0.08)" },
          floating: { value: "0 8px 24px rgba(0,0,0,0.08)" },
          accent: { value: "0 8px 24px rgba(6,199,85,0.24)" },
        },
      },
      textStyles: {
        body: {
          value: {
            fontSize: "20px",
            lineHeight: "normal",
            fontWeight: "400",
          },
        },
        meta: {
          value: {
            fontSize: "14px",
            lineHeight: "1.4",
            color: "text.secondary",
          },
        },
        label: {
          value: {
            fontSize: "16px",
            lineHeight: "1.4",
            fontWeight: "700",
          },
        },
        nav: {
          value: {
            fontSize: "18px",
            lineHeight: "1.4",
            fontWeight: "500",
          },
        },
        sectionTitle: {
          value: {
            fontSize: "24px",
            lineHeight: "1.2",
            fontWeight: "700",
          },
        },
        feedTitle: {
          value: {
            fontSize: "34px",
            lineHeight: "1.1",
            fontWeight: "700",
          },
        },
        postBody: {
          value: {
            fontSize: "20px",
            lineHeight: "1.55",
            fontWeight: "400",
          },
        },
        hero: {
          value: {
            fontSize: "48px",
            lineHeight: "1",
            fontWeight: "700",
          },
        },
      },
      layerStyles: {
        card: {
          value: {
            bg: "surface.canvas",
            borderWidth: "1px",
            borderColor: "border.subtle",
            borderRadius: "card",
            boxShadow: "card",
          },
        },
        panel: {
          value: {
            bg: "surface.canvas",
            borderWidth: "1px",
            borderColor: "border.subtle",
            borderRadius: "shell",
            boxShadow: "card",
          },
        },
        frosted: {
          value: {
            bg: "rgba(255,255,255,0.92)",
            borderWidth: "1px",
            borderColor: "border.subtle",
            boxShadow: "floating",
            backdropFilter: "blur(16px)",
          },
        },
      },
    },
    globalCss: {
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      html: {
        minHeight: "100%",
      },
      body: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: "0",
        bg: "surface.canvas",
        color: "text.primary",
        fontFamily: "body",
        fontSize: "20px",
        lineHeight: "normal",
        wordBreak: "break-word",
        overflowWrap: "break-word",
        lineBreak: "strict",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  }),
);
