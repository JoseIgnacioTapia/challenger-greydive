import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionsItems } from '../../features/questionsAnswers/questionsAnswers.js';
import { Container } from './SurvePage.styles.jsx';

function SurveyPage() {
  const { questions } = useSelector(state => state.questionsAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionsItems());
  }, [dispatch]);

  console.log(questions);

  return (
    <Container>
      <h1>Challenge Greydive</h1>
      <form>
        {questions?.map(question => {
          switch (question.type) {
            case 'text':
              return <p>{question.label}</p>;
            case 'email':
              return <p>{question.label}</p>;
            case 'date':
              return <p>{question.label}</p>;
            case 'select':
              return <p>{question.label}</p>;
            case 'checkbox':
              return <p>{question.label}</p>;
            default:
              return null;
          }
        })}
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}

export default SurveyPage;
