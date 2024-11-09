import axios from 'axios';
import { Platform } from 'react-native';

export const api = axios.create({
    baseURL: Platform.OS === 'android' ? 'http://10.0.2.2:5000' : 'http://localhost:5000',
})