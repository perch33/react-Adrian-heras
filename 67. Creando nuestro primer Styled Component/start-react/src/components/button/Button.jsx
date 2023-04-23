import React from "react";
/* import "./button.css"; */
// import "./button.scss";
import styled from "styled-components";

const StyleButton = styled.button`
  background-color: red;
  color: #fff;

  &:hover {
    background-color: blue;
    color: yellow;
  }
`;

/* yarn add styled-components, todas los estilos se escriben en mayúsculas como componente */

const Button = () => {
  return <StyleButton>Click Me!</StyleButton>;
};

export default Button;
