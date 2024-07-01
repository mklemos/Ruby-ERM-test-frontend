import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// Fetch CSRF token and set it in the meta tag
const getCsrfToken = async () => {
  try {
    const response = await axios.get('http://localhost:3000/csrf-token');
    const csrfToken = response.data.csrfToken;
    document.querySelector('meta[name="csrf-token"]').setAttribute('content', csrfToken);
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
  }
};

getCsrfToken();

ReactDOM.render(<App />, document.getElementById('root'));
