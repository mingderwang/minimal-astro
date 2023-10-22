import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: [/^@radix-ui\/*/]
    }
  },
  adapter: vercel(),
  integrations: [svelte(), react(), tailwind({
      applyBaseStyles: false,
    })],
  output: 'server'
});
