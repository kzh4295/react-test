export type User = {
  id: number;
  name: string;
};

export type Cart = {
  id: User['id'];
  name: User['name'];
  price: number;
};

export type Session = {
  loginUser: User;
  cart: Cart[];
};
