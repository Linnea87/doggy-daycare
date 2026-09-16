import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DogCatalog from "./components/DogCatalog";
import { useDogs } from "./hooks/useDogs";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");
  const { dogs, loading, error } = useDogs();

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
          <DogCatalog dogs={dogs} loading={loading} error={error} />
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;
