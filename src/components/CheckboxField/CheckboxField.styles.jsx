import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  padding: 1rem 0;

  label {
    flex-grow: 0;
    letter-spacing: 1px;

    span {
      color: var(--warning-color);
      padding-left: 2px;
    }
  }

  input[type='checkbox'] {
    margin-left: 1rem;
    border: none;
    padding: 0.4rem;
  }
`;
