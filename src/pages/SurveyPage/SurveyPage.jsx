import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FullNameField from '../../components/FullNameField/FullNameField.jsx';
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
              return <FullNameField key={question.label} question={question} />;
            case 'email':
              return <p key={question.label}>{question.label}</p>;
            case 'date':
              return <p key={question.label}>{question.label}</p>;
            case 'select':
              return <p key={question.label}>{question.label}</p>;
            case 'checkbox':
              return <p key={question.label}>{question.label}</p>;
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
