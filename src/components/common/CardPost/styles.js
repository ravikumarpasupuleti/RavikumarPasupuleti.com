import styled from 'styled-components'

export const Item = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  height: 100%;
  border-bottom: 1px solid #e4e4e4;
`

export const Post = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 680px) {
    flex-direction: column;
  }

  &:hover,
  &:focus {
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.2);
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
      background: #2b2a2a;
      
      a {
        color: #adad2e;
      }
	`};
`

export const ArticleContent = styled.div`
  padding: 1rem;
  flex: auto;

  @media (max-width: 680px) {
    flex: 2;
    padding: 1.5rem;
  }
`

export const ArticleImg = styled.div`
  width: 280px;
  min-width: 280px;
  margin: 20px;
  overflow: hidden;
  background-image: linear-gradient(10deg, #823EB7 0%, #823EB7 100%);

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media (max-width: 992px) {
    height: 300px;
    display: none;
  }

  @media (max-width: 680px) {
    height: 100px;
    width: auto;
    flex: 1;
  }
`

export const ArticleTitle = styled.h2`
  color: #212121;

  a {
    color: inherit;
  }

  @media (max-width: 680px) {
    margin-bottom: 1rem;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
      color: #fff;
      
      a {
        color: #fff;
      }
	`};
`

export const Paragraph = styled.p`
  color: #616161;

  @media (max-width: 680px) {
    margin-bottom: 1rem;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const Info = styled.i`
  color: #212121;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-bottom: 0;
    margin-right: 10px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const PublishInfo = styled.div`
  width: 40%;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 680px) and (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 680px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const StyledSpan = styled.div`
  margin-right: 20px;
  display: inline-flex;
  align-items: center;
`


export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: hidden;
  height: 80px;
  margin-bottom: 0.5rem;

  @media (max-width: 960px) {
    height: 38px;
  }

  a {
    margin: 0 1rem 1rem 0;
    color: #fff;

    @media (max-width: 960px) {
      padding: 0.05rem 0.5rem;
      margin: 0 0.4rem 0.4rem 0;
    }

    &:last-child {
      margin: 0 0 1rem 0;

      @media (max-width: 960px) {
        margin: 0 0 0.4rem 0;
      }
    }
  }
`

export const TagWrapper = styled.span`
  width: 35%;
  display: flex;

  @media only screen and (min-width: 680px) and (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 680px) {
    width: 100%;
    margin-left: 2rem;
    justify-content: center;
    margin: 1rem 0;
  }
`

export const Tag = styled.a`
  cursor: pointer;
  margin-right: 10px;
  padding: 8px;
  border-radius: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.1);

  @media (max-width: 680px) {
    padding: 8px;
    margin-top: 5px;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
      background: rgba(255, 255, 255, 0.1);
	`};
`