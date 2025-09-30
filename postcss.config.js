// postcss.config.js (di root)
import tailwind from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [tailwind(), autoprefixer()],
};
