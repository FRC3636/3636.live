import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import { manifest } from "./utils/seo";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
    integrations: [
        sentry({
            dsn: "https://d9846d5e2c53aec80163141f77a9cabb@o1106499.ingest.sentry.io/4506118179586048",
            sourceMapsUploadOptions: {
                project: "3636-live",
                authToken: process.env.SENTRY_AUTH_TOKEN,
            },
        }),
    ],
    site: "https://3636.live",
    vite: {
        plugins: [
            VitePWA({
                manifest,
            }),
        ],
    },
});
