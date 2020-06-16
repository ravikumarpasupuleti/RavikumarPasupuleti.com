const config = require('./src/data/config')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.m365experts.com',
    site_url: 'https://www.m365experts.com',
    feed_url: `${config.url}${config.siteRss}`,
    title: 'Ravikumar Pasupuleti',
    description: 'Recent content on Ravikumar Pasupuleti',
    image_url: 'https://www.m365experts.com/static/favicon/logo-512.png',
    author: config.author,
    copyright: `${config.defaultTitle} © ${new Date().getFullYear()}`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/providers/typography`,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        // basePath defaults to `/`
        basePath: `/notes/`,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.url,
      },
    },
    {
      resolve: 'gatsby-plugin-feed-mdx',
      options: {
        query: `{
					site {
						siteMetadata {
              site_url
              feed_url
              image_url
              title
              author
              copyright
              description
						}
					}
				}`,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.site_url + edge.node.fields.slug,
                  categories: edge.node.frontmatter.tags,
                  author: 'Ravikumar Pasupuleti',
                })
              })
            },
            query: `{
							allMdx(
                filter: {fileAbsolutePath: {regex: "/blog/"}}
								sort: { order: DESC, fields: [frontmatter___date] }
							) {
								edges {
									node {
										excerpt: excerpt(pruneLength: 260)
                    fields {
                      slug
                    }
										frontmatter {
											title
											date
										}
									}
								}
							}
						}`,
            output: config.siteRss,
            title: 'Ravikumar Pasupuleti',
            link: 'https://feeds.feedburner.com/ravikpasupuuleti',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`, `.markdown`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1080,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 800,
              height: 400,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: config.defaultTitle,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicon/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
