import styled from 'styled-components';

export const DateContainer = styled.div`
  padding: 1rem 0;

  label {
    letter-spacing: 1px;

    span {
      color: var(--warning-color);
      padding-left: 2px;
    }
  }

  input {
    margin-left: 1rem;
    border: none;
    padding: 0.4rem;
    border-radius: 5px;

    &:focus {
      border: 2px solid var(--primary-color);
      outline: none;
    }
  }
`;
