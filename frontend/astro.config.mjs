import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
        configFile: './tailwind.config.mjs',
      },
    }),
    react()
  ],
  experimental: { optimizeHoistedScript: true },
  image: {
    service: passthroughImageService(),
  },
  site: "https://vymktg.com/",
  //base: import.meta.env.BASE_URL,
  //base: import.meta.env.PROD ? "/vymktg.com/" : "",
  base: import.meta.env.BASE_URL,
});
