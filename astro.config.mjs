import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import { manifest } from "./utils/seo";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [sentry()],
  site: "https://3636.live",
  vite: {
    plugins: [VitePWA({
      manifest
    })]
  }
});