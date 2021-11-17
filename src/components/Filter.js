import { useState } from "react";

export default function Filter(props) {
  const originalAnimals = props.animals;
  const [filter, filterBy] = useState(originalAnimals);
  const clickFilter = (e) => {
    const selectedFilter = e.target.dataset.filter;
    let filteredAnimals;
    if (selectedFilter === "*") {
      filteredAnimals = originalAnimals;
    } else {
      filteredAnimals = originalAnimals.filter(isfilterType);
      function isfilterType(animal) {
        if (animal.props.type === e.target.dataset.filter) {
          return true;
        }
      }
    }
    filteredAnimals.forEach((element) => {
      console.log(element.props);
    });
  };

  return (
    <>
      Filter:
      <button onClick={clickFilter} className="filter" data-action="filter" data-filter="cat">
        Only Cats
      </button>
      <button onClick={clickFilter} className="filter" data-action="filter" data-filter="dog">
        Only Dogs
      </button>
      <button onClick={clickFilter} className="filter" data-action="filter" data-filter="*">
        all
      </button>
    </>
  );
}
