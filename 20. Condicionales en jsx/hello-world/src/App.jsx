import "./App.css";

function App() {
  const name = "percy";
  const age = 27;

  const login = true;
  //condicionales

  /* if (login) {
    return (
      <h1>
        hola me llamo {name} y tengo {age} años
      </h1>
    );
  } else {
    return <h1>usuario anónimo</h1>;
  } */


  //operador ternario clásico
  /* return login ? (
    <h1>
      hola me llamo {name} y tengo {age} años
    </h1>
  ) : (
    <h1>usuario anónimo</h1>
  ); */

  
  //operador ternario simplificado (si es true muestra esto, si es false no muestres nada)
  return (
    login && (
      <h1>
        hola me llamo {name} y tengo {age} años
      </h1>
    )
  );
}

export default App;
