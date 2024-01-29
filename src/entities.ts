export type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  categoryId: number;
};