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

import { useForm } from '../../hooks/useForm.js';
import { validationsForm } from '../../utils/validationsForm.js';

const initialForm = {
  full_name: '',
  email: '',
  birth_date: '',
  country_of_origin: '',
  terms_and_conditions: '',
};

function SurveyPage() {
  const { questions } = useSelector(state => state.questionsAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionsItems());
  }, [dispatch]);

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <Container>
      <h1>Challenge Greydive</h1>
      <p>Respuesta requerida</p>
      <form>
        {questions?.map(question => {
          switch (question.type) {
            case 'text':
              return (
                <FullNameField
                  value={form.full_name}
                  onChange={handleChange}
                  key={question.label}
                  question={question}
                />
              );
            case 'email':
              return (
                <EmailField
                  value={form.email}
                  onChange={handleChange}
                  key={question.label}
                  question={question}
                />
              );
            case 'date':
              return (
                <DateField
                  value={form.birth_date}
                  onChange={handleChange}
                  key={question.label}
                  question={question}
                />
              );
            case 'select':
              return (
                <SelectCountryField
                  value={form.country_of_origin}
                  onChange={handleChange}
                  key={question.label}
                  question={question}
                />
              );
            case 'checkbox':
              return (
                <CheckboxField
                  value={form.terms_and_conditions}
                  onChange={handleChange}
                  key={question.label}
                  question={question}
                />
              );
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
