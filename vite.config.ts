import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import reactStaticIsland from "./plugin/vite-plugin-react-static-island";

export default defineConfig({
  plugins: [react(), reactStaticIsland(), vanillaExtractPlugin()],
});
