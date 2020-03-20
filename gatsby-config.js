const config = require("./src/config/index")
const { site, manifest } = config

module.exports = {
  siteMetadata: {
    title: site.title,
    description: site.description,
    siteUrl: site.url,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: manifest.name,
        short_name: manifest.shortName,
        start_url: manifest.startUrl,
        background_color: manifest.backgroundColor,
        theme_color: manifest.themeColor,
        display: manifest.display,
        lang: manifest.lang,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout.js`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
  ],
}
