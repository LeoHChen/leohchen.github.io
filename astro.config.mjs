import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://leohchen.github.io',
  base: '/leoblog',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
