import { PageTitle, SocialShare, Tag } from 'components/common'
import Disqus from 'disqus-react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import { Ad, ArticleDate, ArticleWrapper, Comments, Flex, Tags } from './styles'

export const Post = ({ body, frontmatter, timeToRead, fields }) => {
  const { theme } = useContext(ThemeContext)
  const disqusShortName = 'rahulpnath'
  const postIdentifier = `https://www.rahulpnath.com${fields.slug}`
  const disqusConfig = {
    url: postIdentifier,
    identifier: postIdentifier,
    title: frontmatter.title,
  }
  return (
    <ArticleWrapper theme={theme}>
      <PageTitle>{frontmatter.title}</PageTitle>
      <Flex
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <div>
          <Tags>
            {frontmatter.tags.map((item, i) => (
              <Tag
                tag={item}
                link={`/${item.replace(/\s+/g, '-').toLowerCase()}/`}
                key={i}
              >
                {item}
              </Tag>
            ))}
          </Tags>
          <ArticleDate>
            <i>{frontmatter.date} -</i>
            <i>{timeToRead} min read</i>
          </ArticleDate>
        </div>
        <Ad
          theme={theme}
          dangerouslySetInnerHTML={{
            __html:
              "<script async type='text/javascript' src='//cdn.carbonads.com/carbon.js?serve=CE7IVK7J&placement=wwwrahulpnathcom' id='_carbonads_js' />",
          }}
        />
      </Flex>
      <MDXRenderer>{body}</MDXRenderer>
      <SocialShare title={frontmatter.title} path={fields.slug} />
      <Comments>
        <Disqus.DiscussionEmbed
          shortname={disqusShortName}
          config={disqusConfig}
        />
      </Comments>
    </ArticleWrapper>
  )
}
