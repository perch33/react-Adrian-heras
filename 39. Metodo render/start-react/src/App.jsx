// import { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

/* con el comando rsc crea el componente e importa el react */

class App extends Component {
  // state = {};
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    console.log("Constructor");
  }
  render() {
    console.log("Render");
    /* hacer un set state genera un bucle infinito en el render*/
    if (false) {
      return (
        <>
          <h1>LifeCycle</h1>
          <h2>Number os state: {this.state.number} </h2>
        </>
      );
      /* disponible desde la version 16 */
    }else return null
  }
}

export default App;
