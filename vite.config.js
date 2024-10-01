import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  plugins: [
    react(),
    terser(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  build: {
    sourcemap: true,
  },
  server: {
    historyApiFallback: true,
  },
});
