import React, { Component } from "react";
import Title from "./components/Title";
import Button from "./components/button/Button";

import { ThemeProvider } from "styled-components";
import color from "./components/theming/color";
color

class App extends Component {
  render() {
    return (
      <>
        <Title />
        <ThemeProvider theme={color}>
          <Button>Click Me! 1</Button>
          <Button danger>Click Me 2</Button>
          <Button ghost>Ghost Me! 3</Button>
          <Button danger ghost>
            Ghost Me! 4
          </Button>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
