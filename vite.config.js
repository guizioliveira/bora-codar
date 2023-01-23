import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui/*": path.resolve(__dirname, "./src/components/Ui/*"),
      "@ui": path.resolve(__dirname, "./src/components/Ui"),
      "@components/*": path.resolve(__dirname, "./src/components/*"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@type/*": path.resolve(__dirname, "./src/types/*"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
  base: "/bora-codar/",
})
