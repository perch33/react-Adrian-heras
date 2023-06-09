import React from "react";

const Person = ({ info, hobbies, bio, render }) => {
  if (render) {
    return (
      <>
        <p>
          Soy {info.name} y tengo {info.age} años, Nací en
          {info.birthday.getFullYear()}, Mis hobbies son {hobbies.join(" ")}
        </p>
        {bio}
      </>
    );
  } else {
    return <p>No hay persona</p>;
  }
};

export default Person;
