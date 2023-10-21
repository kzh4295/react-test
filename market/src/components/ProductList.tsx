import { Product } from '../App';

interface productProps {
  products: Product[];
}

function ProductList({ products }: productProps) {
  return (
    <ul>
      {products.map(({ id, image, title, price, description }) => (
        <li key={id} style={{ display: 'flex', padding: '10px' }}>
          <img src={image} alt={title} width='100' />
          <h3>{title}</h3>
          <p>가격: ${price}</p>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
