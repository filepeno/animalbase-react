import "./App.css";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Animal from "./components/Animal";
import prepareObjects from "./components/PrepareData";

function App() {
  const animalsData = [
    {
      fullname: "Mandu the amazing cat",
      age: 9,
    },
    {
      fullname: "Mia the black cat",
      age: 9,
    },
    {
      fullname: "Leeloo the growing dog",
      age: 1,
    },
    {
      fullname: "Toothless the trained dragon",
      age: 14,
    },
    {
      fullname: "ScoobyDoo the wondering dog",
      age: 58,
    },
    {
      fullname: "Horsey the horsing horse",
      age: 10,
    },
  ];
  const editedAnimals = prepareObjects(animalsData);
  console.log(editedAnimals);
  const animalList = editedAnimals.map((animal) => <Animal {...animal} key={animal.name} />);
  return (
    <div className="App">
      <h1>Animals</h1>
      <p>
        {" "}
        <Filter />
      </p>

      <hr />

      <table id="list">
        <thead>
          <Sort />
        </thead>
        <tbody>{animalList}</tbody>
      </table>
    </div>
  );
}

export default App;
