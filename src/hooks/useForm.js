import { useState } from 'react';

// const URL = ''

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = e => {
    let newValues = {};

    if ((e.target.name = 'terms_and_conditions')) {
      newValues = {
        ...form,
        terms_and_conditions: e.target.checked,
      };
    } else {
      newValues = {
        ...form,
        [e.target.name]: e.target.value,
      };
    }

    setForm(newValues);
  };

  const handleBlur = e => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (Object.keys(validateForm(form)).length === 0) {
      setLoading(true);

      try {
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
