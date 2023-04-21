// import { useState } from "react";
import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";

/* con el comando rsc crea el componente e importa el react */

class App extends Component {
  // state = {};
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      post: {},
    };
  }

  async componentDidMount() {
    //peticiones HTTP
    /*  fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data)); */
    /* const { id } = this.state;
    const rest = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await rest.json();
    //Actualización de eventos
    this.setState({ post: data }); */

    //Asignación de eventos
    /* window.addEventListener("scroll", () => console.log("scroll")); */
  }
  handleId = () => {
    this.setState({ id: this.state.id + 1 });
  };

  async componentDidUpdate(prevProp, prevState) {
    console.log(prevState.id, this.state.id);

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
    console.log("Render");
    /* hacer un set state genera un bucle infinito en el render*/
    const { post } = this.state;
    if (true) {
      return (
        <>
          <Header title="lifecycle2" />
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
