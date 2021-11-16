export default function Filter() {
  return (
    <>
      Filter:
      <button class="filter" data-action="filter" data-filter="cat">
        Only Cats
      </button>
      <button class="filter" data-action="filter" data-filter="dog">
        Only Dogs
      </button>
      <button class="filter" data-action="filter" data-filter="*">
        all
      </button>
    </>
  );
}
