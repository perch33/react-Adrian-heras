import React from "react";

const Person = ({ info }) => {
  return (
    <p>
      Soy {info.name} y tengo {info.age} años, Nací en
      {info.birthday.getFullYear()}
    </p>
  );
};

export default Person;