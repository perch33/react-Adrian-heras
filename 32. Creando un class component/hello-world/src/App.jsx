import React, { Component } from "react";

/* El estado siempre tiene que ser un objeto, poner state == a null es como no poner nada */

class App extends Component {
  /* constructor(props) {
    super(props);
    this.state = { otherNumber: 5 };
  } */
  state = { number: 5 };

  render() {
    const { number, name } = this.props;
    return (
      <h1>
        Class Component {number}, name {name}{" "}
      </h1>
    );
  }
}

export default App;
