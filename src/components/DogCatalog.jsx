import DogCard from "./DogCard";
import { useEffect, useState } from "react";

const URL = 'https://api.jsonbin.io/v3/b/6aa79008ffd5d1605303c32f';

const DogCatalog = () => {

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(URL);
            const data = await response.json();

            setDogs(data.record.record);
        }

        getData();

    }, []);

  return (
    <div className="dog-catalog">
        <section id="view-catalog" class="shell">
            <div id="catalog-head" class="shell">
                <div>
                    <h2 class="catalog-head">Dog Catalog</h2>
                    <p class="section-sub">All registered dog customers. Click a card for the full profile.</p>
                </div>
            </div>
            <div class="dog-grid" id="dog-grid">
                {dogs.map((dog) => (
                    <DogCard dog={dog} />
                ))}
            </div>
        </section>      
    </div>
  );
};

export default DogCatalog;