import axios from 'axios';

const BACKEND_URL = 'https://guitar-shop.accelerator.pages.academy';
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  return api;
};
