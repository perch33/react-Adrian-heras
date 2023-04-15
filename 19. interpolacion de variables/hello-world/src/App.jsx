import "./App.css";

/* se usa llaves similar a template string */

function App() {
  const name = "percy";
  const age = 27;

  return (
    <h1>
      hola me llamo {name} y tengo {age} años
    </h1>
  );
}

export default App;
