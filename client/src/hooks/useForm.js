import { useState, useEffect, useCallback } from 'react';

const useForm = (callback, validate, defaultValues) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setDefaultValues = async () => {
    let defaultKeys = Object.keys(defaultValues);
    let additionalFields = {};
    for (let i = 0; i < defaultKeys.length; ++i) {
      if (!values[defaultKeys[i]]) {
        additionalFields[defaultKeys[i]] = defaultValues[defaultKeys[i]];
      }
    }
    return additionalFields;
  };

  const handleCallback = useCallback(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, callback]);

  useEffect(() => {
    handleCallback();
  }, [handleCallback]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);

    setDefaultValues().then((additionalFields) => {
      setErrors(validate(Object.assign(values, additionalFields)));
    });
  };

  const clearErrors = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(false);
    setErrors({});
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value || event.target.checked || '',
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    setDefaultValues,
    clearErrors,
  };
};

export default useForm;
