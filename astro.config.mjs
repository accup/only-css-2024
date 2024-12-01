import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
