import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../types';

function useProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { data, loading, error };
}

export default useProducts;
