import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // Set base URL
  site : import.meta.env.PROD ? 'https://joshs-astro-starter.netlify.app/' : 'http://localhost:4321',

  // Set path for site
  base : import.meta.env.PROD ? '/' : '/'
});