export type User = {
  id: number;
  name: string;
};

export type Cart = {
  id: number;
  name: string;
  price: number;
};

export type Session = {
  loginUser: User;
  cart: Cart[];
};
