import React, { Component, createRef } from "react";

class Refs extends Component {

  //segunda forma sin constructor
  inputText = createRef();


  //primera forma
  /* constructor() {
    super();
    this.inputText = createRef();
  } */
  handleFocus = () => {
    this.inputText.current.focus();
  };
  componentDidMount() {
    this.handleFocus();
  }
  render() {
    return (
      <>
        <input type="text" ref={this.inputText} />
        {/* <button onClick={this.handleFocus}>Focus</button> */}
      </>
    );
  }
}

export default Refs;
