import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "算法",
      icon: "book",
      prefix: "posts/Algorithm",
      children: "structure",
    },
    {
      text: "项目",
      icon: "book",
      prefix: "posts/Project",
      children: "structure",
    },
    {
      text: "杂谈",
      icon: "book",
      prefix: "posts/Posts",
      children: "structure",
    },
    {
      text: "其他",
      icon: "book",
      prefix: "posts/Others",
      children: "structure",
    }

    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
