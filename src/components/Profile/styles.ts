import styled from 'styled-components';

export const ProfileContainer = styled.div``

export const ProfileInfo = styled.div`
  max-width: 54rem;
  height: 13.25rem;
  margin: 0 auto;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const ProfileBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
    }

    div {
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: ${(props) => props.theme.blue};
        font-size: 0.75rem;
        font-weight: 700;

        transition: color 0.2s;

        &:hover {
          color: ${(props) => props.theme['base-title']};
        }

        svg {
          margin-left: 0.5rem;
        }
      }
    }   
  }
`

export const ProfileFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`