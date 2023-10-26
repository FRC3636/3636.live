import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import { manifest } from "./utils/seo";

// https://astro.build/config
export default defineConfig({
    integrations: [],
    site: "https://lewismcclelland.me",
    vite: {
        plugins: [
            VitePWA({
                manifest,
            }),
        ],
    },
});
