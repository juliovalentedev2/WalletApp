import { useEffect, useState, useTransition } from 'react';
import { api } from '../api';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      api.get(url)
        .then((response) => {
          setData(response.data);
          setError(null); 
        })
        .catch((error) => {
          console.error(`Error fetching ${url}:`, error);
          setError(error);
        });
    });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
