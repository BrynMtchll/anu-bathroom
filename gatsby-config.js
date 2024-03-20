/**
 * @type {import('gatsby').GatsbyConfig}
 */

const adapter = require("gatsby-adapter-netlify").default

module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
  siteMetadata: {
    title: `Toilets of ANU`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "D5Hd6hFjwNvO6yiCtwW2jhg0N9gkR_Kmrby8nG-Cang",
      "spaceId": "mhp569usrrrl"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  'gatsby-plugin-material-ui', 'gatsby-plugin-resolve-src']
};