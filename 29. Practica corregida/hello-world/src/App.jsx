import "./App.css";
import { generate as id } from "shortid";
//components
import Card from "./components/Card";

/* */

function App() {
  const cards = [
    {
      id: id(),
      title: "Card 1",
      img: "/img/gato.jpg",
      author: "Perch33",
      date: new Date().toLocaleDateString(),
      tags: ["animal", "gato", "michi"],
      views: 23,
      description:
        "hola com estas este es un cuerpo de relleno de prueba para la card 1",
    },
    {
      id: id(),
      title: "Card 2",
      img: "./img/gato.jpg",
      author: "Perch33",
      date: new Date().toLocaleDateString(),
      tags: ["animal", "gato", "michi"],
      views: 253,
      description:
        "hola com estas este es un cuerpo de relleno de prueba para la card 2",
    },
    {
      id: id(),
      title: "Card 3",
      img: "../img/gato.jpg",
      author: "Perch33",
      date: new Date().toLocaleDateString(),
      tags: ["animal", "gato", "michi"],
      views: 123,
      description:
        "hola com estas este es un cuerpo de relleno de prueba para la card 3",
    },
    {
      id: id(),
      title: "Card 4",
      img: "/img/gato.jpg",
      author: "Perch33",
      date: new Date().toLocaleDateString(),
      tags: ["animal", "gato", "michi"],
      views: 523,
      description:
        "hola com estas este es un cuerpo de relleno de prueba para la card 4",
    },
  ];

  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          author={card.author}
          date={card.date}
          img={card.img}
          title={card.title}
          tags={card.tags}
          views={card.views}
        >
          {card.description}
        </Card>
      ))}
    </div>
  );
}

export default App;
