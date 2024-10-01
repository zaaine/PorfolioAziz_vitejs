import autoprefixer from "autoprefixer";
import purgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
