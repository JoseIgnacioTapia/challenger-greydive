import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 3rem auto;
  padding: 0 8rem;
  width: 60%;
  height: auto;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 5px;

  div {
    padding: 1rem 0;
    background-color: ${props =>
      props.backgroundColor ? '#c9f5f5' : '#edf2f2'};

    &:nth-child(even) {
      background-color: #c9f5f5;
    }
    &:nth-child(odd) {
      background-color: #edf2f2;
    }

    h3 {
      background-color: inherit;
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
    }

    p {
      background-color: inherit;
      font-size: 1.5rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--secondary-color);
  cursor: pointer;
  padding-top: 2rem;
  display: block;
`;
