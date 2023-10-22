import { Cart } from '../types';
import CartItem from './CartItem';

type CartListProps = {
  item: Cart[];
};

function CartList({ item }: CartListProps) {
  return (
    <ul>
      {item.map(({ id, name, price }) => (
         <CartItem id={id} name={name} price={price} />
        
      ))}
    </ul>
  );
}

export default CartList;
