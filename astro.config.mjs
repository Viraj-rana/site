import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://viraj-rana.github.io",
  base: "/site/",
  trailingSlash: "always",
  integrations: [
    tailwind(),
    icon(),
    sitemap({ filter: (page) => !page.includes("/404") }),
  ],
  devToolbar: {
    enabled: false,
  },
});
