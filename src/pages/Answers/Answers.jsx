import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getQuestionsItems,
  getAnswers,
} from '../../features/questionsAnswers/questionsAnswers.js';
import { Container, StyledLink } from './Answers.styles.jsx';

function Answers() {
  const { questions, answers } = useSelector(state => state.questionsAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionsItems());
    dispatch(getAnswers());
  }, [dispatch]);

  const stopIndex = 3;
  const sliceQuestions = questions?.slice(0, stopIndex);

  return (
    <Container>
      {sliceQuestions?.map((question, index) => {
        console.log((index + 1) % 2 === 0);
        return (
          <div key={question.label} backgroundColor={(index + 1) % 2 === 0}>
            <h3>{question.label}</h3>
            <p>{answers[question.name]}</p>
          </div>
        );
      })}
      <StyledLink to={'/'}>Volver</StyledLink>
    </Container>
  );
}

export default Answers;
