import { Session } from '../types';

type CartProps = {
  item: Session['cart'];
};

function CartList({item}:CartProps) {
  return (
    <ul>
      {item.map(({ id, name, price }) => (
        <li style={{ listStyle: 'none' }} key={id}>
          <strong>{name}</strong>
          <span>{price}</span>
        </li>
      ))}
    </ul>
  );
}

export default CartList;
