module.exports = {
  siteMetadata: {
    title: `DevOps Tips and Tricks`,
    author: {
      name: `Engin Polat`,
      summary: `Senior Software Engineer @ Microsoft`,
    },
    description: `DevOps Tips and Tricks`,
    siteUrl: `https://devopstips.net`,
    social: {
      url: 'https://devopstips.net',
      twitter: `devops_tips`,
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
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" width="14" height="14" version="1.1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: "header-link",
              maintainCase: true,
              removeAccents: true,
              elements: [`h1`, `h2`, `h3`, `h4`],
            }
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
      resolve: `gatsby-plugin-gitalk`,
      options: {
        config: {
          clientID: '016220a57a300db3f2d4',
          clientSecret: '6cbc656b37bf445cf454d14eade9a3016abaa217',
          owner: 'polatengin',
          repo: 'devops.tips',
          admin: ['polatengin'],
          distractionFreeMode: false
        }
      }
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
