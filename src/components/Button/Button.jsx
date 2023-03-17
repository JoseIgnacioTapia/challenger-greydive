import styled from 'styled-components';

const ButtonStyled = styled.button`
  margin: 2rem 0;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1a8181;
  }
`;

function Button({ type, label }) {
  return <ButtonStyled type={type}>{label}</ButtonStyled>;
}

export default Button;
