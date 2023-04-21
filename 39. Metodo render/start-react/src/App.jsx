// import { useState } from "react";
import React, { Component } from "react";

import "./App.css";

class App extends Component {
  // state = {};
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    /* bindear eventos */
    console.log("Constructor");
  }
  render() {
    return (
      <>
        <h1>LifeCycle</h1>
        <h2>Number os state: {this.state.number} </h2>
      </>
    );
  }
}

export default App;
