import DogCard from "./DogCard";
import { useDogs } from "../hooks/useDogs";
import "../styles/DogCatalog.css";

const DogCatalog = () => {
  const { dogs, loading, error } = useDogs();

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
        </div>

        {loading && <p className="catalog-status">Loading dogs…</p>}

        {error && <p className="catalog-status error">{error}</p>}

        {!loading && !error && (
          <div className="dog-grid" id="dog-grid">
            {dogs.map((dog) => (
              <DogCard key={dog.chipNumber} dog={dog} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default DogCatalog;
