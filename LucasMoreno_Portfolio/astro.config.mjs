import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ['styled-components'], // ✅ Esto es lo necesario
    },
  },
  experimental: {
    viewTransitions: true,
  },
  site: 'https://www.lucas-moreno-dev.com/',
});
