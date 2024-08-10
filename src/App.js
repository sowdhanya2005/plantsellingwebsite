
// App.js
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Herbal/Cart';
import Herbal from './Components/Herbal/Herbal';
 // Adjust the import path as necessary
import Navbar from './Components/Navbar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (item) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
  };

  const handleDecreaseQuantity = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem.quantity === 1) {
      handleRemoveItem(item);
    } else {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    }
  };

  const handleRemoveItem = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.name !== item.name));
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Herbal handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={
          <Cart
            cartItems={cartItems}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        } />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
};

export default App;



{/*import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Herbal/Cart';
import Herbal from './Components/Herbal/Herbal';
import Navbar from './Components/Navbar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (item) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
  };

  const handleDecreaseQuantity = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem.quantity === 1) {
      handleRemoveItem(item);
    } else {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    }
  };

  const handleRemoveItem = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.name !== item.name));
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Herbal handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={
          <Cart
            cartItems={cartItems}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        } />
      </Routes>
    </Router>
  );
};

export default App;*/}

