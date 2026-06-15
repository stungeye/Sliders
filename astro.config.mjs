import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      langs: ["html", "css", "javascript", "typescript", "jsx", "tsx", "mdx"],
    },
  },
});
