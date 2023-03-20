import { useState } from 'react';

const URL = 'https://answers-f0c70-default-rtdb.firebaseio.com/answers.json';

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
        await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        });
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
      } catch (error) {
        setLoading(false);
        setResponse(error);
        setForm(initialForm);
        setTimeout(() => setResponse(false), 5000);
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
