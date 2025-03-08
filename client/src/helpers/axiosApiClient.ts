import axios from 'axios';
import { store } from '@/store/hooks';

export const axiosApiClient = axios.create({
  baseURL: process.env.SERVER_URL,
});

axiosApiClient.interceptors.request.use((config) => {
  try {
    const state = store.getState();
    const token = state.user?.user?.token;

    if (token) {
      config.headers['authorization'] = token;
    }
  } catch (error) {
    console.error('Error setting auth header', error);
  }

  return config;
});
