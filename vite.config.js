import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://18.61.159.40:8080",
        changeOrigin: true,
        secure: true,
      },
      "/uploads": {
        target: "http://18.61.159.40:8080",
        changeOrigin: true,
        secure: true,
      },
      define: {
  global: {},
}
    },
  },
});
