import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer, postcssPresetEnv()],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
