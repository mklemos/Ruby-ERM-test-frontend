import React, { useState } from 'react';
import axios from '../axiosConfig'; // Import the configured Axios instance

const ProductForm = ({ onProductCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = { name, description, quantity, price };

    axios.post('http://localhost:3000/products', product)
      .then(response => {
        onProductCreated(response.data);
        setName('');
        setDescription('');
        setQuantity(0);
        setPrice(0);
      })
      .catch(error => {
        console.error('There was an error creating the product!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={e => setQuantity(parseInt(e.target.value, 10))} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={e => setPrice(parseFloat(e.target.value))} />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
