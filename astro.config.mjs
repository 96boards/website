import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  website: "https://www.96boards.org",
  output: "static",
  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
    sitemap(),
  ],
});
