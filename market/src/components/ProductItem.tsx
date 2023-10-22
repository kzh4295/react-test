import { Product } from '../types';

type ProductItemProps = Product;

function ProductItem(product: ProductItemProps) {
  const { image, title, price, description } = product;

  return (
    <li style={{ display: 'flex', padding: '10px' }}>
      <img src={image} alt={title} width='100' />
      <h3>{title}</h3>
      <p>가격: ${price}</p>
      <p>{description}</p>
    </li>
  );
}

export default ProductItem;
