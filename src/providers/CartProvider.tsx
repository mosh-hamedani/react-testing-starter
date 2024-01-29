import { PropsWithChildren, createContext, useState } from "react";
import { Product } from "../entities";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  getItem: (product: Product) => CartItem | null;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  getItemCount: () => number;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItem = (product: Product) => {
    const index = cartItems.findIndex((item) => item.product.id === product.id);
    return index !== -1 ? cartItems[index] : null;
  };

  const addToCart = (product: Product) => {
    const item = getItem(product);

    if (item) {
      // If the product is already in the cart, update its quantity
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Product) => {
    const item = getItem(product);
    if (!item) return;

    if (item.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else
      setCartItems(cartItems.filter((item) => item.product.id !== product.id));
  };

  const getItemCount = () =>
    cartItems.reduce((total, product) => total + product.quantity, 0);

  return (
    <CartContext.Provider
      value={{ getItem, addToCart, removeFromCart, getItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}
