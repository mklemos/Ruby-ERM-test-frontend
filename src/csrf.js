import axios from 'axios';

export const getCsrfToken = async () => {
  const response = await axios.get('http://localhost:3000/csrf-token');
  const csrfToken = response.data.csrfToken;
  document.querySelector('meta[name="csrf-token"]').setAttribute('content', csrfToken);
};