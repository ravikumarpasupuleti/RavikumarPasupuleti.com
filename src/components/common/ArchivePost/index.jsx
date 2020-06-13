import { Tag } from 'components/common'
import { Link } from 'gatsby'
import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import { ArticleContent, ArticleDate, ArticleTitle, Item, Meta, Post } from './styles'

export const ArchivePost = ({
  path,
  title,
  tags,
  date,
  timeToRead
}) => {
  const { theme } = useContext(ThemeContext)

  return (
      <Item>
        <Link to={path} >
      <Post theme={theme}>
        <ArticleContent>
          <ArticleTitle theme={theme}>
              {title}
          </ArticleTitle>
          <Meta>
            <ArticleDate>
                {date}
            </ArticleDate>
            {tags.map((item, i) => (
                <Tag tag={item} link={`/${item.replace(/\s+/g, '-').toLowerCase()}/`} key={i}>
                    {item}
                </Tag>
            ))}
        </Meta>
        
        </ArticleContent>
      </Post>
    </Link>
    </Item>
  )
}