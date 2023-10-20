import './App.css';
import { useState } from 'react';
import { My } from './components/My';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ]
};

function App() {
  const [session, setSession] = useState(SampleSession);

  const login = (id: number, name: string) => {
    setSession({ ...session, loginUser: { id, name } });
  }

  const logout = () => {
    setSession({ ...session, loginUser: { id: 0, name: '' } });
  }

  return (
    <>
      <My session={session} login = {login} logout = {logout} />
    </>
  );
}

export default App;
