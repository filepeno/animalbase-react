import "./App.css";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Animal from "./components/Animal";

function App() {
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
        <tbody>
          <Animal />
          <Animal />
        </tbody>
      </table>
    </div>
  );
}

export default App;
