import React from "react";
/* import "./button.css"; */
// import "./button.scss";
import styled from "styled-components";

const color = "royalblue";
const padding = "2rem";

const StyleButton = styled.button`
  background-color: red;
  color: #fff;
  padding: ${padding};

  &:hover {
    background-color: ${color};
    color: yellow;
  }
`;

/* yarn add styled-components, todas los estilos se escriben en mayúsculas como componente */

const Button = () => {
  return <StyleButton>Click Me!</StyleButton>;
};

export default Button;
