type Session = {
  loginUser: {
    id: number;
    name: string;
  };
  cart: Array<{ id: number; name: string; price: number }>;
};

type MyProps = {
  session: Session;
  logout: () => void;
};

export const Profile = ({ session, logout }: MyProps) => {
  return (
    <div>
      <p>Logged in as: {session.loginUser.name} ({session.loginUser.id})</p>
      <ul>
        {session.cart.map((ele) => (
          <li style={{listStyle: 'none'}} key={ele.id}>
            <strong>{ele.name}</strong>
            <span>{ele.price}</span>
          </li>))}
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
