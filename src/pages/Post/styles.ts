import styled from "styled-components";

export const PostContainer = styled.section`
  max-width: 54rem;
  margin: 0 auto;
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  p {
    margin-bottom: 1rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme["blue"]};
      font-weight: 700;
    }
  }

  h1, h2, h3 {
    color: ${(props) => props.theme["blue"]};
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }
`