import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// const manifestForPlugin: Partial<VitePWAOptions> = {
//   registerType: "prompt",
//   includeAssets: ["favicon.icon", "-apple-touch-icon.png", "maskable_icon.png"],
//   manifest: {
//     name: "Weather Ups",
//     short_name: "Weather Ups",
//     description: "An app that can weather forecast for your city.",
//     icons: [
//       {
//         src: "/android-chrome-192x192.png",
//         sizes: "192*192",
//         type: "image/png",
//       },
//       {
//         src: "/android-chrome-512x512.png",
//         sizes: "512*512",
//         type: "image/png",
//       },
//       {
//         src: "/apple-touch-icon.png",
//         sizes: "180*180",
//         type: "image/png",
//         purpose: "apple touch icon",
//       },
//       {
//         src: "/maskable_icon.png",
//         sizes: "225*225",
//         type: "image/png",
//         purpose: "any maskable",
//       },
//     ],

//     theme_color: "#171717",
//     background_color: "#e8ebf2",
//     display: "standalone",
//     scope: "/",
//     start_url: "/",
//     orientation: "portrait",
//   }
// }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // registerType: 'autoUpdate',
      manifest: {
        icons: [
          {
            src: '/icons/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/icons/vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/icons/react.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          }
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
      },
    })
  ],
})
