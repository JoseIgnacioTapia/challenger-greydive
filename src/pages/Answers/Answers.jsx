import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getQuestionsItems,
  getAnswers,
} from '../../features/questionsAnswers/questionsAnswers.js';

function Answers() {
  const { questions, answers } = useSelector(state => state.questionsAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionsItems());
    dispatch(getAnswers());
  }, [dispatch]);

  const stopIndex = 3;
  const sliceQuestions = questions?.slice(0, stopIndex);
  console.log(sliceQuestions);

  return (
    <div>
      {sliceQuestions?.map(question => {
        return (
          <div key={question.label}>
            <p>{question.label}</p>
            <p>{answers[question.name]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
