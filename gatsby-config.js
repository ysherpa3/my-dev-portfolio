const path = require(`path`);

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: `Yogesh Sherpa`,
    defaultDescription: `Web development portfolio`,
    image: `/src/images/logo.png`,
    siteLanguage: `en-US`,
    siteUrl: `https://ys-dev-portfolio.netlify.app/`,
    title: `Yogesh Sherpa Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: false,
        defaultQuality: 85,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yogesh Sherpa Web Development Portfolio`,
        short_name: `Portfolio`,
        description: `Web development portfolio website`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#00acc1`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Github`,
        fieldName: `github`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        url: `https://api.github.com/graphql`,
      },
    },
  ],
};
