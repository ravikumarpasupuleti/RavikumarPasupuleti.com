import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  z-index: 1;
  box-shadow: 0 5px 20px -10px #000;
  margin-bottom: -3rem;
  position: fixed;
	margin-bottom: unset;

  ${({ theme }) =>
    theme === 'dark' &&
    `
		background: #212121;
		border-bottom: unset;
		box-shadow: 0 5px 20px -10px #fff;
	`}
`

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
		display: block;
		z-index: 4;	
	`}
`
