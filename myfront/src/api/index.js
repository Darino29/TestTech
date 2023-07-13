// Database
import axios from 'axios';
export const API = axios.create({
  baseURL: 'http://localhost:5000',
});

export const createProduct = (product) => API.post("/product", product);
export const getProduct = () => API.get(`/product`);
export const updateProduct = ( product) => API.patch(`/product/${product.id}`, product);
export const deleteProduct = ( product) => API.delete(`/product/${product}`);
