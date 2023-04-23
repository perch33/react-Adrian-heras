import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  border-style: none;
  outline: none;
  /* background-color: ${({ bgColor }) => bgColor || "purple"}; */
  background-color: ${({ danger }) => danger ? "red" : "royalblue" };
  color: #fff;
`;

export default Button;
