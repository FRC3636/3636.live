import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import { manifest } from "./utils/seo";

// https://astro.build/config
export default defineConfig({
    site: "https://3636.live",
    vite: {
        plugins: [
            VitePWA({
                manifest,
            }),
        ],
    },
});
