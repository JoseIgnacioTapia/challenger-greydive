import styled from 'styled-components';

export const FullNameContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    flex-grow: 0;
  }

  input {
    flex-grow: 1;
    margin-left: 1rem;
    padding: 0.4rem;
    border: none;

    &:focus {
      border: 2px solid var(--primary-color);
      outline: none;
    }
  }
`;
