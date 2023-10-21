import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://aktuelle-erderhitzung.de',
  integrations: [preact(), tailwind(), sitemap(), mdx(), svelte()],
  legacy: {
    astroFlavoredMarkdown: true
  }
});