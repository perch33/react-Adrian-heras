import React from "react";
import styled from "styled-components";

const getBorder = (width, type, color) => {
  return `${width} ${type} ${color}`;
};

const StyleTitle = styled.h1`
  text-align: center;
  border: ${getBorder("3px", "solid", "red")};
`;

const Title = () => {
  return <StyleTitle>Style Components</StyleTitle>;
};

export default Title;

/* rsc para crear el componente */
