import "./App.css";
//components
import Header from "./components/header";
import Person from "./components/person";

/* se usa doble llave, una para la interpolación de react y otra pa la interpolación del objeto */

function App() {
  return (
    <>
      <Header />
      <Person
        info={{
          age: 27,
          name: "Pepe",
          birthday: new Date(1993, 11, 4),
        }}
      />
      <Person
        info={{
          age: 27,
          name: "Carlos",
          birthday: new Date(1986, 11, 4),
        }}
      />
      <Person
        info={{
          age: 27,
          name: "nelson",
          birthday: new Date(1964, 11, 4),
        }}
      />
      <Person
        info={{
          age: 27,
          name: "nino",
          birthday: new Date(2014, 11, 4),
        }}
      />
      <Person
        info={{
          age: 27,
          name: "koki",
          birthday: new Date(2022, 11, 4),
        }}
      />
    </>
  );
}

export default App;
