import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FullNameField from '../../components/FullNameField/FullNameField.jsx';
import EmailField from '../../components/EmailField/EmailField.jsx';
import DateField from '../../components/DateField/DateField.jsx';
import SelectCountryField from '../../components/SelectField/SelectCountryField.jsx';
import CheckboxField from '../../components/CheckboxField/CheckboxField';
import Button from '../../components/Button/Button.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import Message from '../../components/Message/Message.jsx';
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
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  let content;
  if (loading && !response) {
    return <Loader />;
  } else if (!loading && !response) {
    content = (
      <div>
        <p>* Respuesta requerida</p>
        <form onSubmit={handleSubmit}>
          {questions?.map(question => {
            switch (question.type) {
              case 'text':
                return (
                  <div key={question.label}>
                    <FullNameField
                      value={form.full_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      question={question}
                    />
                    {errors.name && <p>*{errors.name}</p>}
                  </div>
                );
              case 'email':
                return (
                  <div key={question.label}>
                    <EmailField
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      question={question}
                    />
                    {errors.email && <p>*{errors.email}</p>}
                  </div>
                );
              case 'date':
                return (
                  <div key={question.label}>
                    <DateField
                      value={form.birth_date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      key={question.label}
                      question={question}
                    />
                    {errors.date && <p>*{errors.date}</p>}
                  </div>
                );
              case 'select':
                return (
                  <div key={question.label}>
                    <SelectCountryField
                      value={form.country_of_origin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      question={question}
                    />
                    {errors.country && <p>*{errors.country}</p>}
                  </div>
                );
              case 'checkbox':
                return (
                  <div key={question.label}>
                    <CheckboxField
                      value={form.terms_and_conditions}
                      onChange={handleChange}
                      question={question}
                    />
                    {errors.checkbox && <p>*{errors.checkbox}</p>}
                  </div>
                );
              case 'submit':
                return (
                  <div key={question.label}>
                    <Button type={question.type} label={question.label} />
                  </div>
                );
              default:
                return null;
            }
          })}
        </form>
      </div>
    );
  } else if (!loading && response && typeof response !== 'object') {
    content = <Message send={true} />;
  } else if (typeof response === 'object' && response !== null) {
    content = <Message send={false} />;
  }

  return (
    <Container>
      <h1>Challenge Greydive</h1>
      {content}
    </Container>
  );
}

export default SurveyPage;
