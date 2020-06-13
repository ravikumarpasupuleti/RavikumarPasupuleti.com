const path = require('path')
const Queries = require('./queries')
const createPaginatedPages = require('gatsby-paginate')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  // eslint-disable-next-line default-case
  switch (node.internal.type) {
    case 'Mdx': {
      const { relativePath } = getNode(node.parent)
      const slug = `/${relativePath
        .replace('.mdx', '')
        .replace('.markdown', '')
        .replace('.md', '')}/`
      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || '',
      })
    }
  }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const postTemplate = path.resolve('./src/templates/post.js')
    const tagTemplate = path.resolve('./src/templates/tag.js')
    const tagPrefix = '/blog/tag/'
    const categoryPrefix = '/blog/category/'

    const { data, errors } = await graphql(Queries)
    const postsPerPage = 8
    const totalPages = Math.ceil(data.posts.edges.length / postsPerPage)

    createPage({
      path: 'blog',
      component: path.resolve('src/templates/blog.js'),
      context: {
        group: data.posts.edges.slice(0, postsPerPage),
        pathPrefix: 'blog/page',
        first: true,
        last: false,
        index: 1,
        pageCount: totalPages,
      },
    })

    createPage({
      path: 'blog/page/1',
      component: path.resolve('src/templates/blog.js'),
      context: {
        group: data.posts.edges.slice(0, postsPerPage),
        pathPrefix: 'blog/page',
        first: true,
        last: false,
        index: 1,
        pageCount: totalPages,
      },
    })

    createPaginatedPages({
      edges: data.posts.edges,
      createPage,
      pageTemplate: 'src/templates/blog.js',
      pageLength: postsPerPage,
      pathPrefix: 'blog/page',
    })

    let alltags = []
    // Create posts pages
    data.posts.edges.forEach(
      ({
        node: {
          fields: { slug },
          frontmatter: { tags },
        },
      }) => {
        alltags = alltags.concat(tags || [])
        createPage({
          path: slug,
          component: postTemplate,
        })
      }
    )

    createPage({
      path: 'subscribe',
      component: path.resolve('src/templates/subscribe.js'),
    })

    createPage({
      path: 'archives',
      component: path.resolve('src/templates/archive.js'),
      context: {
        allPosts: data.posts.edges,
      },
    })

    createPage({
      path: 'drafts',
      component: path.resolve('src/templates/blog.js'),
      context: {
        group: data.drafts.edges,
        title: 'Drafts',
        first: true,
        last: true,
        index: 1,
        pageCount: 1,
      },
    })

    // Create draft pages
    data.drafts.edges.forEach(
      ({
        node: {
          fields: { slug },
        },
      }) => {
        createPage({
          path: slug,
          component: postTemplate,
        })
      }
    )

    const uniqueTags = [...new Set(alltags)]
    // Create tags pages
    uniqueTags.forEach(tag => {
      let slug = tag.replace(/\s+/g, '-')
      createPage({
        path: `${tagPrefix}${slug}/`,
        component: tagTemplate,
        context: {
          slug,
          tag,
        },
      })
    })

    // Create category pages
    uniqueTags.forEach(tag => {
      let slug = tag.replace(/\s+/g, '-').toLowerCase()
      createPage({
        path: `${categoryPrefix}${slug}/`,
        component: tagTemplate,
        context: {
          slug,
          tag,
        },
      })
    })

    if (errors) {
      throw new Error(errors)
    }
  } catch (err) {
    console.log(err)
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
