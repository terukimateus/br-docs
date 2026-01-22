import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "joi/index": "src/joi/index.ts",
    "joi/browser": "src/joi/browser.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2018",
  treeshake: true,
  splitting: false,
});
