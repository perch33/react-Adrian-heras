import "./App.css";
//components
import Header from "./components/header";
import Person from "./components/person";

function App() {

  /*para string se usa comillas en las propiedades, pero para numero hay que usar llaves*/
  return (
    <>
      <Header /> 
      <Person name="pepe" age={30} />
      <Person name="nino" age={9} />
      <Person name="Ricardo" age={27} />
      <Person name="nelson" age={22} />
      <Person name="gringo" age={5} />
    </>
  );
}

export default App;
