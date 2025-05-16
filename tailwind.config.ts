// import type { Config } from "tailwindcss";
// import { config } from "./src/lib/config";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: config.primaryColor, // Cor dinâmica do config.ts
//         "primary-foreground": "#FFFFFF", // Contraste para textos
//       },
//       animation: {
//         "fade-in": "fadeIn 0.8s ease-out",
//         "slide-up": "slideUp 0.8s ease-out",
//         wave: "wave 3s ease-in-out infinite",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         slideUp: {
//           "0%": { opacity: "0", transform: "translateY(50px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         wave: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-10px)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;
import type { Config } from "tailwindcss";
import { config } from "./src/lib/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: config.colors.primary,
        accent: config.colors.accent,
        background: config.colors.background,
        text: config.colors.text,
        neutral: config.colors.neutral,
        neutralLight: config.colors.neutralLight,
        beige: config.colors.beige,
        "primary-foreground": "#FFFFFF", // Contraste para primary
      },
      fontFamily: {
        heading: [config.typography.fontFamily.heading, "sans-serif"],
        body: [config.typography.fontFamily.body, "sans-serif"],
      },
      fontSize: {
        h1: config.typography.fontSizes.h1,
        h2: config.typography.fontSizes.h2,
        body: config.typography.fontSizes.body,
        small: config.typography.fontSizes.small,
      },
      borderRadius: {
        DEFAULT: config.borderRadius,
      },
      boxShadow: {
        DEFAULT: config.boxShadow,
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        wave: "wave 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
