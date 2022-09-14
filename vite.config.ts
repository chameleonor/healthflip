import { defineConfig } from 'vite'
import vitePlugin from 'vite-plugin-md'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "components": path.resolve(__dirname, "./src/components"),
    },
  },
})
