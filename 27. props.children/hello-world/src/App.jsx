import "./App.css";
//components
import Header from "./components/header";
import Person from "./components/person";

/* */

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
        hobbies={["la música", "viajar"]}
        bio={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem
            ducimus ab quibusdam non provident excepturi, fuga autem enim
            dolores alias sequi odit sint voluptatibus dolor facere? Hic, nam
            magni?
          </p>
        }
        render
      />
      <Person
        info={{
          age: 27,
          name: "Carlos",
          birthday: new Date(1986, 11, 4),
        }}
        hobbies={["comer", "viajar"]}
        bio={<p>Soy una biografía</p>}
      />
      <Person
        info={{
          age: 27,
          name: "nelson",
          birthday: new Date(1964, 11, 4),
        }}
        hobbies={["salir en bicicleta", "viajar"]}
      />
      <Person
        info={{
          age: 27,
          name: "nino",
          birthday: new Date(2014, 11, 4),
        }}
        hobbies={["comer", "dormir"]}
      />
      <Person
        info={{
          age: 27,
          name: "koki",
          birthday: new Date(2022, 11, 4),
        }}
        hobbies={["jugar", "comer"]}
      />

      <Person> Esto son los children de person </Person>
    </>
  );
}

export default App;
