import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IDE CLI",
  description: "A Personnal CLI",
  lang: "en-US",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/installation" },
    ],
    sidebar: [
      {
        text: "IDE",
        items: [
          {
            items: [
              { text: "Installation", link: "/docs/installation" },
              { text: "License", link: "/docs/license" },
            ],
          },
          {
            text: "Templates",
            base: "/docs/templates/",
            items: [
              {
                text: "TypeScript",
                base: "/docs/templates/typescript",
                items: [
                  { text: "Simple TS Project", link: "/vanilla" },
                  { text: "Library", link: "/library" },
                ],
              },     
              { text: "NextJS", link: "/nextjs" },
              { text: "Python", link: "/python" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Piarre/IDE" }],
  },
});
