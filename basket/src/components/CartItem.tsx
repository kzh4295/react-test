import { Cart } from '../types';

type CartItemProps = Cart;

function CartItem({ name, price }: CartItemProps) {
  return (
    <li style={{ listStyle: 'none' }}>
      <strong>{name}</strong>
      <span>{price}</span>
    </li>
  );
}

export default CartItem;
