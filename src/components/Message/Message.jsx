import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getAnswers } from '../../features/questionsAnswers/questionsAnswers.js';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 10px;

    svg {
      align-self: center;
    }

    span {
      font-size: 1.2rem;
    }
  }
`;

const StyledLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  margin: 1rem 0;
  font-size: 1.2rem;
  color: var(--primary-color);
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const answerId = 'hello';

function Message(props) {
  const { send } = props;

  const { answers } = useSelector(state => state.questionsAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnswers());
  }, [dispatch]);

  return (
    <Container>
      {send ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-send"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: '#1a8181' }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 14l11 -11"></path>
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
          </svg>
          <span>Formulario Enviado Correctamente!</span>
          <StyledLink to={`/answers/${answers.id}`}>
            <span>Mira tus respuestas </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-big-right-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>
          </StyledLink>
        </div>
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-send-off"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: '#d93025' }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 14l2 -2m2 -2l7 -7"></path>
            <path d="M10.718 6.713l10.282 -3.713l-3.715 10.289m-1.063 2.941l-1.722 4.77a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l4.772 -1.723"></path>
            <path d="M3 3l18 18"></path>
          </svg>
          <span>No se pudo enviar el formulario. Intente de nuevo</span>
        </div>
      )}
    </Container>
  );
}

export default Message;
