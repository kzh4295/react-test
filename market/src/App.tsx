import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import { product } from './types';


function useProducts() {
  const [data, setData] = useState<product[]>([]);
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

function App() {
  const { data, loading, error } = useProducts();

  return (
    <div className='App'>
      <h1>장보기 어플</h1>
      {loading ? (
        <p>Loading…</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ProductList products={data} />
      )}
    </div>
  );
}

export default App;
