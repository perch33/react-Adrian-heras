import React, { Component } from "react";
import Title from "./components/Title";
import Button from "./components/button/Button";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import color from "./components/theming/color";
color;

const ButtonRounded = styled(Button)`
  border-radius: 15px;
  transition: color, background-color 5s;
  padding: 1rem 2rem;
`;

const GlobalStyle = createGlobalStyle`
  body{
    background-color: goldenrod;
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Title />
        <ThemeProvider theme={color}>
          <Button>Click Me! 1</Button>
          <Button danger>Click Me 2</Button>
          <Button ghost>Ghost Me! 3</Button>
          <Button danger ghost>
            Ghost Me! 4
          </Button>
          <ButtonRounded danger ghost>Rounded</ButtonRounded>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
