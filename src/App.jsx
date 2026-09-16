import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DogCatalog from "./components/DogCatalog";
import { useDogs } from "./hooks/useDogs";
import "./App.css";
import DogProfile from "./components/DogProfile";

const App = () => {
  const [page, setPage] = useState("home");
  const { dogs, loading, error } = useDogs();
  const {selectedDog, setSelectedDog} = useState(null);

  const goToProfile = (dog) => {
    setSelectedDog(dog);
    setPage('dogProfile')
  }

  return (
    <>
      <Header page={page} onNavigate={setPage} />

      <main>
        {page === "home" && (
          <Home
            dogs={dogs}
            loading={loading}
            onViewCatalog={() => setPage("catalog")}
          />
        )}
        {page === "catalog" && (
          <DogCatalog dogs={dogs} loading={loading} error={error} onSelectedDog={goToProfile} />
        )}

        {page === 'dogProfile' && (
          <DogProfile dog={selectedDog} onBack={setPage('catalog')}></DogProfile>
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;
