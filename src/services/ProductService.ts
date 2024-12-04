import axios from 'axios';
import { Product } from '../types/Product';


const API_URL = 'http://localhost:5000/api/products';

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
