// src/components/ProductList.js
import React from 'react';
import { useCart, addToCart } from './CartContext';

// Sample products data
const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest.',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    price: 22.3,
    description: 'Slim-fitting style, contrast raglan long sleeve.',
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description: 'Great outerwear jackets for Spring/Autumn/Winter.',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description: 'Slim fit casual wear for men.',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon",
    price: 695,
    description: 'Inspired by the mythical water dragon.',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave',
    price: 168,
    description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring.',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings.',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
    price: 64,
    description: 'USB 3.0 and USB 2.0 Compatibility.',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description: 'Boosts burst write performance, making it ideal for typical PC workloads.',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  }
];

const ProductList = () => {
  const { dispatch } = useCart();

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
