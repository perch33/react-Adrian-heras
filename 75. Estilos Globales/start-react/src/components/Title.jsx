import React from "react";
import styled from "styled-components";

const getBorder = (width, type, color) => {
  return `${width} ${type} ${color}`;
};

// const StyleTitle = styled.h1`
//   /*  text-align: center;
//   border: ${getBorder("3px", "solid", "red")}; */
//   margin: 0;
// `;
const Header = styled.header`
  border: ${getBorder("3px", "solid", "royalblue")};
  text-align: center;
  margin-bottom: 1rem;

  & h1 {
    margin: 0;
    color: red;
  }
  & h1::after {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    background-color: greenyellow;
  }
  

  &:hover {
    background-color: yellow;
  }

  &:hover ::after {
    background-color: blue;
  }
`;

const Title = () => {
  return (
    <Header>
      <h1>Style Components</h1>
    </Header>
  );
};

export default Title;

/* rsc para crear el componente */
