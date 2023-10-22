import ProductList from './components/ProductList';
import useProducts from './hooks/useProducts';

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
