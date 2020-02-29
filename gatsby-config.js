const config = require("./src/config/index")

module.exports = {
  siteMetadata: {
    title: config.site.title,
    description: config.site.description,
    siteUrl: config.site.url,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`],
}
