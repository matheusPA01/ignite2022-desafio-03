import styled, { css } from "styled-components";

export const PostInfoContainer = styled.div`
  max-width: 54rem;
  height: 10.5rem;
  margin: 0 auto;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5rem;

  h2 {
    margin-top: 1.25rem;
  }
`

interface PostInfoSpanProps {
  variant: 'left' | 'right'
}

const spanVariant = {
  left: 'margin-left',
  right: 'margin-right',
}

export const PostInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export const PostHeaderSpan = styled.span<PostInfoSpanProps>`
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme["base-title"]};
    }
  }

  svg {
    ${props => {
    return css`${spanVariant[props.variant]}: 0.5rem;`
  }}
  }
`

export const PostInfoFooter = styled.footer`
  display: flex;
  gap: 2rem;

  span {
    color: ${(props) => props.theme["base-span"]};
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`