import React, { Component } from "react";
import Title from "./components/Title";
import Button from "./components/button/Button";

class App extends Component {
  render() {
    return (
      <>
        <Title />
        <Button bgColor='red'>Click aquí</Button>
        <Button danger>Click aquí</Button>
      </>
    );
  }
}

export default App;
