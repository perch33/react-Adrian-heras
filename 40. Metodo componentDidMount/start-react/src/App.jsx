// import { useState } from "react";
import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";

/* con el comando rsc crea el componente e importa el react */

class App extends Component {
  // state = {};
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    console.log("Constructor");
  }

  async componentDidMount() {
    //peticiones HTTP
    /*  fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data)); */

    const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await rest.json();
    //Actualización de eventos
    this.setState({ posts: data });

    //Asignación de eventos
    window.addEventListener("scroll", () => console.log("scroll"));
  }

  render() {
    console.log("Render");
    /* hacer un set state genera un bucle infinito en el render*/
    const { posts } = this.state;
    if (true) {
      return (
        <>
          <Header title="lifecycle2" />
          <div>
            {posts.map((post) => (
              <Fragment key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </Fragment>
            ))}
          </div>
        </>
      );
      /* disponible desde la version 16 */
    } else return null;
  }
}

export default App;
