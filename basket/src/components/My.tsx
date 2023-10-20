import { useState } from 'react';
import { Profile } from './Profile';
import { Login } from './Login';

type Session = {
  loginUser: {
    id: number;
    name: string;
  };
  cart: Array<{ id: number; name: string; price: number }>;
};

type MyProps = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
};

export const My = ({ session, login, logout }: MyProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div>My</div>
      {session.loginUser.id !== 0 && session.loginUser.name !== '' ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} inputValue={inputValue} setInputValue={setInputValue} />
      )}
    </>
  );
}
