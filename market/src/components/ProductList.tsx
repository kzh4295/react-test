import ProductItem from './ProductItem';
import { product } from '../types';

interface ProductListProps {
  products: product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default ProductList;
