import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  max-width: 54rem;
  margin: 0 auto;

  margin-top: 4.5rem;
  margin-bottom: 3rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    margin-top: 0.75rem;
    width: 100%;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};
    border: none;

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
      color: ${(props) => props.theme['base-text']};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`