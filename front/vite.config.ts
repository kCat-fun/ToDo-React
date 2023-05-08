import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  resolve: {
    alias: [{ find: "src/", replacement: `${__dirname}/src/` }],
  },
  plugins: [vanillaExtractPlugin(),react()],
  server: {
    host: "0.0.0.0",
  },
});