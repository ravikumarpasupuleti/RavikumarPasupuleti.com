import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { CardPost } from '../CardPost'

export const Bookmark = ({ slug, title, description }) => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allMdx(filter: { fileAbsolutePath: { regex: "//blog//" } }) {
        edges {
          node {
            id
            originalDescription: excerpt(pruneLength: 260)
            fields {
              slug
            }
            frontmatter {
              originalTitle: title
              thumbnail {
                childImageSharp {
                  fluid {
                    aspectRatio
                    base64
                    originalImg
                    originalName
                    presentationHeight
                    presentationWidth
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const {
    node: {
      id,
      originalDescription,
      frontmatter: { originalTitle, thumbnail },
    },
  } = posts.edges.find(p => p.node.fields.slug === slug)
  console.log('I AM HERE')
  console.log(thumbnail)
  return (
    <CardPost
      id={id}
      link={slug}
      title={title || originalTitle}
      thumbnail={thumbnail}
      description={description || originalDescription}
    />
  )
}
