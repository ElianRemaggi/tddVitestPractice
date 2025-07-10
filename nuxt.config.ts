import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from 'node:url';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
