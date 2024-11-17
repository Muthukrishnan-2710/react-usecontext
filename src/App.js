// src/App.js
import React from 'react';
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <ProductList />
        <CartPage />
      </div>
    </CartProvider>
  );
};

export default App;
