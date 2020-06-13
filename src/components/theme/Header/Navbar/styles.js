import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 40px;
padding: 10px 0 10px 0;
max-width: 100%;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: #212121;

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const BrandLogo = styled.div`
  transition: 0.5s;
  height: 2.8rem;
  width: 2.8rem;
  margin-bottom: 0;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.7;
    transition: 0.5s;
    transform: rotate(360deg);
  }
`
