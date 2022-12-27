import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchProduct = () => axios.get(`${URL}/products`);
