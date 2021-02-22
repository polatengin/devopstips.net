module.exports = {
  siteMetadata: {
    title: `DevOps Tips and Tricks`,
    author: {
      name: `Engin Polat`,
      summary: `Senior Software Engineer @ Microsoft`,
    },
    description: `DevOps Tips and Tricks`,
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
              wrapperStyle: 'border: 1px solid #777; margin-left: 0 !important; margin-right: 0 !important;',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
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
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `devopstips`
      }
    },
  ],
};
