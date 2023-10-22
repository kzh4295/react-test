import { Dispatch, SetStateAction } from 'react';

type LoginProps = {
  login: (id: number, name: string) => void;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

export const Login = ({ inputValue, setInputValue, login }: LoginProps) => {
  const handleLogin = () => {
    login(1, inputValue);
  };

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
};
