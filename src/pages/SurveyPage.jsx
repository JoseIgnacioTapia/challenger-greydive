import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionsItems } from '../features/questionsAnswers/questionsAnswers.js';

function SurveyPage() {
  const { questions } = useSelector(state => state.questionsAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionsItems());
  }, [dispatch]);

  console.log(questions);

  return <div>SurveyPage</div>;
}

export default SurveyPage;
