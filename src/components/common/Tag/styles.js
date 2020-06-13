import { Link } from 'gatsby'
import styled from 'styled-components'

export const StyledTag = styled(Link)`
  padding: 0.2rem 1rem;
  color: ${({ bg }) => bg} !important;
  border-radius: 50px;
  transition: 0.3s all;
  opacity: 1;
  border: 1px solid ${({ bg }) => bg};
  &:hover {
    color: ${({ color }) => color} !important;
    background: ${({ bg }) => bg};
    opacity: 1;
    transition: 0.3s all;
  }
`
