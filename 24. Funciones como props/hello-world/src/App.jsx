import "./App.css";
//components
import Header from "./components/header";
import Person from "./components/person";

function App() {
  return (
    <>
      <Header />
      <Person age={30} birthday={new Date(1995, 4, 21)} name="pepe" />
      <Person name="nino" age={9} birthday={new Date(2007, 4, 21)} />
      <Person name="Ricardo" age={27} birthday={new Date(1995, 4, 21)} />
      <Person name="nelson" age={22} birthday={new Date(2000, 4, 21)} />
      <Person name="gringo" age={5} birthday={new Date(2018, 4, 21)} />
    </>
  );
}

export default App;
