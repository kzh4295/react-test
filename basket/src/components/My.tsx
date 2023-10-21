import { useState } from 'react';
import { Profile } from './Profile';
import { Login } from './Login';
import { Session } from '../types';

type MyProps = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
};

export const My = ({ session, login, logout }: MyProps) => {
  const [inputValue, setInputValue] = useState('');

  const isAuthenticated =
    session.loginUser.id !== 0 && session.loginUser.name !== '';

  return (
    <>
      <div>My</div>
      {isAuthenticated ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login
          login={login}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
    </>
  );
};
