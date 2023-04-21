import React, { Component } from "react";

/* En react todas las funciones asociadas a eventos por convención empiezan por handle que significa manejador y después lo que van a hacer*/

class App extends Component {
  state = { number: 5 };

  handleClick = () => {
    /* Nunca hacer esto
    this.state.number++
    */
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <>
        <h1>Number: {this.state.number}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </>
    );
  }
}

export default App;
