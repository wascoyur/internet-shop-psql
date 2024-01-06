import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "src/client/shared"),
      "@app": path.resolve(__dirname, "src/client/app"),
      "@widgets": path.resolve(__dirname, "src/client/widgets"),
      "@feauters": path.resolve(__dirname, "src/client/feauters"),
      "@entities": path.resolve(__dirname, "src/client/entities"),
    },
  },
});
