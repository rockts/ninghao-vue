import axios from 'axios';

export const apiHttpClient = axios.create({
  baseURL: 'http://localhost:3000',
});
