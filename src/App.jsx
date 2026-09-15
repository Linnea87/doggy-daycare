import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import DogCatalog from './components/DogCatalog';
import './App.css';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <>
      <Header page={page} onNavigate={setPage} />

      <main>
        {page === 'home' && (
          <Home onViewCatalog={() => setPage('catalog')} />
        )}
        {page === 'catalog' && (
          <DogCatalog />
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;