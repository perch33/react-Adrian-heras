// import { useState } from "react";
import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Clock from "./components/Clock";

/* con el comando rsc crea el componente e importa el react */

class App extends Component {
  // state = {};
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      post: {},
      message: "Lifecycle",
      showClock: true,
    };
  }

  handleId = () => {
    this.setState({ id: this.state.id + 1 });
  };
  handleMessage = () => {
    this.setState({ message: "Lifecycle Cambiado" });
  };
  handleUpdate = () => {
    /* usar las menores veces posibles, nunca si es posible */
    this.forceUpdate();
  };
  handleClock = () => {
    this.setState({ showClock: !this.state.showClock });
  };

  async componentDidUpdate(prevProp, prevState) {
    /* console.log("update"); */

    if (prevState.id !== this.state.id) {
      const { id } = this.state;
      const rest = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await rest.json();
      //Actualización de eventos
      this.setState({ post: data });
    }
  }

  render() {
    /* hacer un set state genera un bucle infinito en el render*/
    const { post } = this.state;
    if (true) {
      return (
        <>
          {this.state.showClock && <Clock />}

          <Header title={this.state.message} />
          <div>
            {/* {posts.map((post) => (
              <Fragment key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </Fragment>
            ))} */}

            {
              <>
                <button onClick={this.handleId}>Next Id</button>
                <button onClick={this.handleMessage}>Change Header</button>
                <button onClick={this.handleUpdate}>Force Update</button>
                <button onClick={this.handleClock}>
                  {this.state.showClock ? "Hide Clock" : "Show Clock"}
                </button>
                <h2>Post con id: {this.state.id}</h2>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </>
            }
          </div>
        </>
      );
      /* disponible desde la version 16 */
    } else return null;
  }
}

export default App;
