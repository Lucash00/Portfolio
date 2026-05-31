import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  integrations: [tailwind(), react()],
  vite: {
    optimizeDeps: {
      include: ["@react-spring/web", "react", "react-dom", "react/jsx-runtime"],
    },
    ssr: {
      noExternal: ["styled-components"],
    },
  },
  site: "https://www.lucas-moreno-dev.com/",
});
