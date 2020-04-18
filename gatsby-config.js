const path = require(`path`);

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: `Yogesh Sherpa`,
    defaultDescription: `Web development portfolio`,
    defaultTitle: `Portfolio`,
    image: `logos/logo.png`,
    siteLanguage: `en-US`,
    siteUrl: `http://localhost:8000/`,
    githubUrl: `https://github.com/ysherpa3`,
    linkedinUrl: `https://www.linkedin.com/in/ysherpa`,
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
    { resolve: `gatsby-transformer-sharp` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Dev Portfolio`,
        short_name: `Portfolio`,
        description: `Web development portfolio`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#00acc1`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
        icons: [
          {
            src: `/images/logo-120x120.png`,
            sizes: `120x120`,
            type: `image/png`,
          },
          {
            src: `/images/logo-128x128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: `/images/logo-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `/images/logo-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/*`],
        },
      },
    },
    { resolve: `gatsby-plugin-netlify` },
    { resolve: `gatsby-plugin-react-helmet-async` },
    { resolve: `gatsby-plugin-material-ui` },
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
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
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
  ],
};
