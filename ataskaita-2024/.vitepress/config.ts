import { defineConfig } from "vitepress";
import { sharedConfig } from "./config/shared";
import ltConfig from "./config/lt";
import enConfig from "./config/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    ...sharedConfig,
  },
  locales: {
    root: {
      label: "Lietuvių",
      lang: "lt",
      ...ltConfig,
    },
    // en: {
    //   label: 'English',
    //   lang: 'en',
    //   link: '/en/',
    //   ...enConfig
    // }
  },
});
