import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // Set base URL
  site : 'https://joshkaye.dev',

  // Set path for site
  base : '/',

  build : {
    inlineStylesheets : 'never'
  },

  server : {
    host : true,
  },

  devToolbar : {
    enabled : false
  }
});