import { useState } from 'react';
import Home from './components/Home';
import './App.css';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <>
      {page === 'home' && (
        <Home onViewCatalog={() => setPage('catalog')} />
      )}
    </>
  );
};

export default App;