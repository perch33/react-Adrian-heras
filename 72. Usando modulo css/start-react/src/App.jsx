import React, { Component } from "react";
import Title from "./components/Title";
import Button from "./components/button/Button";

class App extends Component {
  render() {
    return (
      <>
        <Title />
        <Button >Click Me! 1</Button>
        <Button danger>Click Me 2</Button>
        <Button ghost>Ghost Me! 3</Button>
        <Button danger ghost>Ghost Me! 4</Button>
      </>
    );
  }
}

export default App;
