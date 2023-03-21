import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: var(--secondary-color);
  margin: 4rem auto;
  width: 60%;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;

  svg {
    margin: 2rem 0 0 0;
  }

  h1 {
    background-color: inherit;
    padding: 2rem 0;
  }
`;

const StyledLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--primary-color);
  cursor: pointer;
  padding-top: 2rem;
  display: block;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-error-404"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        strokWidth="2"
        stroke="currentColor"
        fill="none"
        strokLinecap="round"
        strokLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 7v4a1 1 0 0 0 1 1h3"></path>
        <path d="M7 7v10"></path>
        <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z"></path>
        <path d="M17 7v4a1 1 0 0 0 1 1h3"></path>
        <path d="M21 7v10"></path>
      </svg>
      <h1>Pagina No Encontrada</h1>
      <StyledLink to={'/'}>Volver</StyledLink>
    </Container>
  );
};

export default NotFoundPage;
