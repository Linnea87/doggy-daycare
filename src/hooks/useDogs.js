import { useEffect, useState } from 'react';
import { getDogs } from '../services/api';

export const useDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDogs = async () => {
      try {
        const data = await getDogs();
        setDogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDogs();
  }, []);

  return { dogs, loading, error };
};
