import { product } from '../types';

type ProductItemProps = product;

function ProductItem(product: ProductItemProps) {
  const { id, image, title, price, description } = product;

  return (
    <li key={id} style={{ display: 'flex', padding: '10px' }}>
      <img src={image} alt={title} width='100' />
      <h3>{title}</h3>
      <p>가격: ${price}</p>
      <p>{description}</p>
    </li>
  );
}

export default ProductItem;
