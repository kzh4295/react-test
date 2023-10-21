import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
} 

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);
        setLoading(false);
      } catch (error:any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className='App'>
      <h1>장보기 어플</h1>
      {loading ? (
        <p>Loading…</p>
      ) : error ? (
        <p>Error: {error.message}</p> // 에러 메시지 표시
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default App;
