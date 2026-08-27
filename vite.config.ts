import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        neutral: resolve(rootDir, "neutral.html"),
      },
    },
  },
  server: {
    host: "127.0.0.1",
  },
});
