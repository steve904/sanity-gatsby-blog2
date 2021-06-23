export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60d374bc590b911b9c030aa6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-jrp2746b",
                  apiId: "277d0c83-1776-4a74-a3ab-b9600df46e79",
                },
                {
                  buildHookId: "60d374bc916ef51ab762b9a7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-pysp7r4r",
                  apiId: "f536310d-c0ac-4198-9a68-3c4d7b4246bd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/steve904/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-pysp7r4r.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
