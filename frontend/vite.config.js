import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'micomartin.my.id',  // ✅ allow your domain
    ],
  },
   css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
