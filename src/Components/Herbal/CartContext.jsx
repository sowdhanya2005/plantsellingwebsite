
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map(cartItem =>
        cartItem.id === id
          ? { ...cartItem, quantity }
          : cartItem
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
