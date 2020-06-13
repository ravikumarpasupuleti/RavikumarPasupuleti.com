import { Layout, Post, SEO, SmallerContainer } from 'components/common'
import { graphql } from 'gatsby'
import React from 'react'
import './highlight.css'

export default ({ data: { post } }) => (
  <Layout>
    <SmallerContainer>
      <SEO
        type="NewsArticle"
        title={post.frontmatter.title}
        articleBody={post.description}
        datePublished={post.frontmatter.normalDate}
        dateModified={
          post.frontmatter.edited
            ? post.frontmatter.edited
            : post.frontmatter.date
        }
        cover={ (post.frontmatter.thumbnail && post.frontmatter.thumbnail.childImageSharp && post.frontmatter.thumbnail.childImageSharp.fluid.originalImg)}
        location={post.fields.slug}
        description={post.description}
        readTime={post.timeToRead}
      />
      <Post {...post} />
    </SmallerContainer>
  </Layout>
)

export const postQuery = graphql`
  query($path: String!) {
    post: mdx(fields: { slug: { eq: $path } }) {
      body
      description: excerpt(pruneLength: 105)
      timeToRead
      fields {
        slug
      }
      frontmatter {
        normalDate: date
        date(formatString: "MMMM DD, YYYY")
        edited(formatString: "MMMM DD, YYYY")
        title
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 700) {
              originalImg
            }
          }
        }
      }
    }
  }
`
