import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: "https://viraj-rana.github.io",
  base: "/site/",
  integrations: [tailwind(), icon()],
  devToolbar: {
    enabled: false,
  },
});
