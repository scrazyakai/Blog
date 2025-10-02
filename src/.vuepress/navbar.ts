import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "算法",
        icon: "pen-to-square",
        prefix: "/algorithm",
        children: [
          { text: "二分", icon: "pen-to-square", link: "https://scrazyakai.github.io/blog/posts/algorithm/%E4%BA%8C%E5%88%86.html" },
          { text: "回溯", icon: "pen-to-square", link: "https://scrazyakai.github.io/blog/posts/algorithm/%E5%9B%9E%E6%BA%AF.html" },
          "3",
          "4",
        ],
      },
      {
        text: "项目",
        icon: "pen-to-square",
        prefix: "/project",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
