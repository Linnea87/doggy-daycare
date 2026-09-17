import DogCard from "./DogCard";
import "../styles/DogCatalog.css";
import { useState } from "react";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "checkedIn", label: "Checked In" },
  { key: "atHome", label: "At Home" },
];

const DogCatalog = ({ dogs, onSelectedDog, loading, error }) => {
  
  const [filter, setFilter] = useState("all");

  let filteredDogs = dogs;
  if (filter === "checkedIn") {
    filteredDogs = dogs.filter((dog) => dog.present);
  } else if (filter === "atHome") {
    filteredDogs = dogs.filter((dog) => !dog.present);
  }
  
  return (
    <div className="dog-catalog">
      <section id="view-catalog" className="shell">
        <div id="catalog-head" className="shell">
          <div>
            <h2 className="catalog-head">Dog Catalog</h2>
            <p className="section-sub">
              All registered dog customers. Click a card for the full profile.
            </p>
          </div>

          <div className="catalog-filters">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`filter-btn${filter === key ? " active" : ""}`}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>

        </div>

        {loading && <p className="catalog-status">Loading dogs…</p>}

        {error && <p className="catalog-status error">{error}</p>}

        {!loading && !error && (
          <div className="dog-grid" id="dog-grid">
            {filteredDogs.map((dog) => (
              <DogCard key={dog.chipNumber} dog={dog} onSelect={onSelectedDog} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default DogCatalog;
