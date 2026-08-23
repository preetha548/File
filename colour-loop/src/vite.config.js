import { readdirSync } from "node:fs";
import { defineConfig } from "vite";

const input = readdirSync(process.cwd(), { recursive: true })
  .filter((file) => file.endsWith(".html"))
  .map((file) => `./${file}`);

if (input.length === 0) {
  throw new Error("No entry point files found.");
}

export default defineConfig({
  build: {
    rollupOptions: { input },
    target: "esnext"
  },

  resolve: {
    alias: {
      "@": import.meta.dirname
    }
  }
});
