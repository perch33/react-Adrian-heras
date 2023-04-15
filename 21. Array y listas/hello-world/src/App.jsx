import "./App.css";
import { generate as id } from "shortid";

/* 
-para renderizar array la mejor forma que tenemos es usar el map, 
-para generar el id del map hay que instalar la siguiente Librería "npm i shortid", para renombrar el método se usa la palabra "as" id() */

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const names = ["Percy", "Dorian", "Laura", "Alex"];
  return (
    <ul>
      {names.map((name) => {
        return (
          <li key={id()}>
            {name} {id()}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
