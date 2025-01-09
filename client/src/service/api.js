import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Change this to your backend base URL
});

// Automatically add Authorization headers if a token exists
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;
