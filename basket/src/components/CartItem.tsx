import { Cart } from '../types';

type CartItemProps = Cart;

function CartItem({ id, name, price }: CartItemProps) {
  return (
    <li style={{ listStyle: 'none' }} key={id}>
      <strong>{name}</strong>
      <span>{price}</span>
    </li>
  );
}

export default CartItem;
