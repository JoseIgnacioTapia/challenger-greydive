import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FullNameField from '../../components/FullNameField/FullNameField.jsx';
import EmailField from '../../components/EmailField/EmailField.jsx';
import DateField from '../../components/DateField/DateField.jsx';
import SelectCountryField from '../../components/SelectField/SelectCountryField.jsx';
import CheckboxField from '../../components/CheckboxField/CheckboxField';
import Button from '../../components/Button/Button.jsx';
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
      <p>Respuesta requerida</p>
      <form>
        {questions?.map(question => {
          switch (question.type) {
            case 'text':
              return <FullNameField key={question.label} question={question} />;
            case 'email':
              return <EmailField key={question.label} question={question} />;
            case 'date':
              return <DateField key={question.label} question={question} />;
            case 'select':
              return (
                <SelectCountryField key={question.label} question={question} />
              );
            case 'checkbox':
              return <CheckboxField key={question.label} question={question} />;
            case 'submit':
              return (
                <Button
                  key={question.label}
                  type={question.type}
                  label={question.label}
                />
              );
            default:
              return null;
          }
        })}
      </form>
    </Container>
  );
}

export default SurveyPage;
