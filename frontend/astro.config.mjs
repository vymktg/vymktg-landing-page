import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
  site: "https://vymktg.github.io/",
  //base: import.meta.env.BASE_URL,
  base: import.meta.env.PROD ? "/vymktg.com/" : "",
});
