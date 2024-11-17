// src/components/CartPage.js
import React from 'react';
import { useCart, removeFromCart, updateQuantity } from './CartContext';

const CartPage = () => {
  const { state, dispatch } = useCart();

  // Calculate total quantity and amount
  const totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty. Start adding items!</p>
      ) : (
        <div className="cart-items">
          {state.items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => dispatch(updateQuantity(item.id, item.quantity - 1))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}>+</button>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default CartPage;
