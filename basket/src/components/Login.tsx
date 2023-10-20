type LoginProps = {
  login: (id: number, name: string) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};


export const Login = ({ login, inputValue, setInputValue }: LoginProps) => {
  const handleLogin = () => {
    login(1, inputValue);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
