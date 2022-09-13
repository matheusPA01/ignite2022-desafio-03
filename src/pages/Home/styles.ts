import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
`

export const PostList = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-bottom: 14rem;
`

export const PostCard = styled(Link)`
  width: 100%;
  height: 16.25rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  text-decoration: none;

  &:hover {
    border: 3px solid ${(props) => props.theme['base-border']};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`