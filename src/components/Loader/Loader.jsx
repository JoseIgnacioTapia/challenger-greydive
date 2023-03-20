import { keyframes } from 'styled-components';
import styled from 'styled-components';

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Load = styled.div`
  margin: auto;
  margin-top: 40vh;
  width: 52px;
  height: 52px;
  border: 6px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${spinner} 1s linear infinite;
`;

function Loader() {
  return <Load></Load>;
}

export default Loader;
