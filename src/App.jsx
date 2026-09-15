import { useState } from 'react';
import Home from './components/Home';
import DogCatalog from './components/DogCatalog';
import './App.css';
 
const App = () => {
  const [page, setPage] = useState('home');
 
  return (
    <>
      {page === 'home' && (
        <Home onViewCatalog={() => setPage('catalog')} />
      )}
      {page === 'catalog' && (
        <DogCatalog />
      )}
    </>
  );
};
 
export default App;