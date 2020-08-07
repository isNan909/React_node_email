import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  return {handleChange, values};
};

export default useForm;
