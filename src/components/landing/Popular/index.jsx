import { CardPost, Container, CustomButton, Row, Subtitle } from 'components/common'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import { Center, Wrapper } from './styles.js'

export const Popular = () => {
  const {
    popular: { edges },
  } = useStaticQuery(graphql`
    query {
      popular: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { popular: { eq: true } }
        }
        limit: 5
      ) {
        edges {
          node {
            description: excerpt(pruneLength: 230)
            id
            timeToRead
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMM DD, YYYY")
              tags
              thumbnail {
                childImageSharp {
                  ...imageFields
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper as={Container}>
      <Subtitle>Popular Articles</Subtitle>
      <Row landing>
        {edges.map(
          ({
            node: {
              id,
              description,
              timeToRead,
              fields: {slug},
              frontmatter: { title, date, thumbnail, tags },
            },
          }) => (
            <CardPost
              landing
              key={id}
              description={description}
              timeToRead={timeToRead}
              title={title}
              date={date}
              path={slug}
              thumbnail={thumbnail}
              tags={tags}
            />
          )
        )}
      </Row>
      <Center>
        <CustomButton>
          <Link to="/blog/">See more</Link>
        </CustomButton>
      </Center>
    </Wrapper>
  )
}
