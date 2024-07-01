// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Correct import path

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);

  useEffect(() => {
    axios.get('/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/products', {
      product: {
        name,
        description,
        quantity,
        price
      }
    }).then(response => {
      setProducts([...products, response.data]);
      setName('');
      setDescription('');
      setQuantity(0);
      setPrice(0.0);
    }).catch(error => {
      console.error('Error creating product:', error);
    });
  };

  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
        </div>
        <button type="submit">Create Product</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}: {product.quantity} @ {product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
