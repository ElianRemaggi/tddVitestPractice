import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from 'node:url';
import { defineNuxtConfig} from 'nuxt/config';
// <reference types="nuxt" />
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/app/assets/css/main.css'],
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },
  dir: {
    app: 'app'
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,   // ⬅️ sin prefijos de carpeta
    },
  ]
})
