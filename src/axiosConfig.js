import axios from 'axios';

// Configure Axios to include CSRF token
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

export const getCsrfToken = async () => {
  try {
    const response = await axios.get('/csrf-token');
    const csrfToken = response.data.csrfToken;
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
  }
};

// Fetch CSRF token on app startup
getCsrfToken();

export default axios;
