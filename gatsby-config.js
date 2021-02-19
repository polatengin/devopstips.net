module.exports = {
  siteMetadata: {
    title: `DevOps Tips and Tricks`,
    author: {
      name: `Engin Polat`,
      summary: `Senior Software Engineer @ Microsoft`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://devops-tips.netlify.app/`,
    social: {
      twitter: `polatengin`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_posts`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_static`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-RCJJCQ9R6E"
        ],
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DevOps Tips and Tricks`,
        short_name: `devops.tips`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4D85D1`,
        display: `standalone`,
        icon: `_static/logo.svg`,
        legacy: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
