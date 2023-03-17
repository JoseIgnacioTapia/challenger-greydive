import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;
  padding: 0 5rem;
  background-color: var(--secondary-color);
  width: 70%;
  height: auto;

  h1 {
    padding: 3rem 0;
    text-align: center;
    background-color: inherit;
    color: var(--black);
    font-size: 3rem;
  }

  p {
    background-color: inherit;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--warning-color);

    &::before {
      content: '*';
      padding-right: 4px;
    }
  }

  form {
    margin: 1rem 0;
  }
`;
