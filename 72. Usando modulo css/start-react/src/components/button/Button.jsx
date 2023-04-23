import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  border: none;
  outline: none;
  margin-right: 1rem;
  margin-bottom: 1rem;
  color: #fff;
  background-color: royalblue;
  ${({ danger, ghost }) =>
    danger &&
    ghost &&
    css`
      background-color: transparent;
      color: red;
      border: 1px solid red;
    `}
  ${({ danger, ghost }) =>
    danger &&
    !ghost &&
    css`
      background-color: red;
    `}
    ${({ danger, ghost }) =>
    !danger &&
    ghost &&
    css`
      background-color: transparent;
      color: royalblue;
      border: 1px solid royalblue;
    `}
`;

export default Button;
