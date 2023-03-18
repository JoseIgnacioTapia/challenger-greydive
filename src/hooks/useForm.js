import { useState } from 'react';

// const URL = ''

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = e => {
    const newValues =
      e.target.name === 'terms_and_conditions'
        ? {
            ...form,
            terms_and_conditions: e.target.checked,
          }
        : {
            ...form,
            [e.target.name]: e.target.value,
          };

    setForm(newValues);
    setErrors(validateForm(newValues));
  };

  const handleBlur = e => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(validateForm(form)).length === 0) {
      setLoading(true);

      try {
        console.log('enviando');
        await fetch();
        setLoading(false);
        setResponse(true);
        setTimeout(() => setResponse(false), 500);
      } catch (error) {
        setLoading(false);
        setResponse(error.status);
        setForm(initialForm);
      }
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
