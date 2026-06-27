import axios from 'axios';

// We'll point this to the backend API base URL
// In development, this will be localhost:8000
// In production, it will be the real VPS domain/IP
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach JWT tokens to every request automatically
api.interceptors.request.use((config) => {
  // In Next.js client-side, we can read localStorage
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
