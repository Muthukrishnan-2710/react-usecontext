// src/components/CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial cart state
const initialState = {
  items: [],
};

// Reducer function to handle actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // If item exists, increase its quantity by 1
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return { ...state, items: updatedItems };
      } else {
        // If item doesn't exist, add new item with quantity 1
        const newItem = { ...action.payload, quantity: 1 };
        return { ...state, items: [...state.items, newItem] };
      }
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    }
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity < 1) return state; // Prevent negative quantity
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }
    default:
      return state;
  }
};

// Cart Context creation
const CartContext = createContext();

// Cart Provider to wrap around the App
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);

// Action creators
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});

export const updateQuantity = (id, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: { id, quantity },
});
