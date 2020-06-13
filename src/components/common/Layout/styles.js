import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 1rem;

  ${({ theme }) =>
    theme === 'dark' &&
    `
		background: #212121;
	`};
`
