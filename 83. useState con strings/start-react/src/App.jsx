import React, { useState } from "react";

const App = ({ InitialNumber }) => {
  const [number = InitialNumber, setNumber] = useState(10);

  const [text, setText] = useState("");

  //[estado , function de setState]
  //[state, ()setState]

  const handleIncrement = () => {
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    setNumber(number - 1);
  };

  const handleReset = () => {
    setNumber(0);
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1> Number:{number} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <p>contenido del input {text} </p>
      <input type="text" onChange={handleInput} />
    </>
  );
};

export default App;
