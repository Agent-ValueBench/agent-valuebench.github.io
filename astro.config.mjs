import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://agent-valuebench.github.io',
  integrations: [tailwind()],
});
