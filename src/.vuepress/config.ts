import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/52xinxin.top/blog/",

  lang: "zh-CN",
  title: "青云小筑",
  description: "青云小筑",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
