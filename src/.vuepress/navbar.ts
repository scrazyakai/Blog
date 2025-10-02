import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
   "/demo/",
    "/posts/algorithm/",
    "/posts/posts/",
    "/posts/project/",
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
          // "3",
          // "4",
        ],
      },
      {
        text: "项目",
        icon: "pen-to-square",
        prefix: "/project",
        children: [
          {
            text: "Docker",
            icon: "pen-to-square",
            link: "https://scrazyakai.github.io/blog/posts/project/docker.html",
          },
          {
            text: "面经",
            icon: "pen-to-square",
            link: "https://scrazyakai.github.io/blog/posts/project/%E9%9D%A2%E8%AF%95%E9%81%87%E5%88%B0%E7%9A%84%E9%A2%98.html",
          },
        ],
      },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
