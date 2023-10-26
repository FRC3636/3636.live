// Type imports
import type { ManifestOptions } from "vite-plugin-pwa";

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
    baseURL: "https://3636.live", // Change this to your production URL.
    description: "Stream live matches from 3636 Generals Robotics", // Change this to be your website's description.
    type: "website",
    image: {
        url: "/android-chrome-512x512.png",
        alt: "",
        width: 512,
        height: 512,
    },
    siteName: "3636.live - Generals Robotics", // Change this to your website's name,
};
export const manifest: Partial<ManifestOptions> = {
    name: seoConfig.siteName, // Change this to your website's name.
    short_name: seoConfig.siteName, // Change this to your website's short name.
    description: seoConfig.description, // Change this to your websites description.
    theme_color: "#ffffff", // Change this to your primary color.
    background_color: "#000000", // Change this to your background color.
    icons: [
        {
            src: "/maskable-640x640.png",
            sizes: "640x640",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
        },
    ],
};
