import { Session } from '../types';
import CartList from './CartList';

type MyProps = {
  session: Session;
  logout: () => void;
};

export const Profile = ({ session, logout }: MyProps) => {
  const { loginUser, cart } = session;
  return (
    <>
      <p>
        Logged in as: {loginUser.name} ({loginUser.id})
      </p>
      <CartList item={cart} />
      <button type='button' onClick={logout}>
        Logout
      </button>
    </>
  );
};
