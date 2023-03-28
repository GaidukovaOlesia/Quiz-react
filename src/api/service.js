import axios from 'axios';

export default axios.create({
  baseURL: 'https://6411c65337c88aa434a1422e.mockapi.io',
  headers: { 'Content-type': 'application/json' },
});
