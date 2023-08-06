import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  /*si tenemos un objeto de 1 a 5 propiedades se recomienda hacer un estado por cada propiedad  */
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" onChange={handleChange} name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" onChange={handleChange} name="email" type="text" />
      </div>
      <p> {JSON.stringify(values)} </p>
    </form>
  );
};

export default Form;
