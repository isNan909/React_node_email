import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    values,
  };
};

export default useForm;
