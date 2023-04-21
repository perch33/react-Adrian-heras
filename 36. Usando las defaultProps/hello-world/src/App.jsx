import React, { Component } from "react";
import "./App.css";

/* se usa setState para cambiar el estado */

class App extends Component {
  state = { number: this.props.number };

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  handleClickDecrement = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };
  handleClickReset = () => {
    this.setState({
      number: 0,
    });
  };

  render() {
    return (
      <>
        <h1>Number: {this.state.number}</h1>
        <button className="buttons" onClick={this.handleClick}>
          Increment
        </button>
        <button className="buttons" onClick={this.handleClickDecrement}>
          Decrement
        </button>
        <button className="buttons" onClick={this.handleClickReset}>
          Reset
        </button>
      </>
    );
  }
}

/* props por defecto */
App.defaultProps = {
  number: 90,
};

export default App;
