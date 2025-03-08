import { productsReducer } from '@/features/productSlice';
import { userReducer } from '@/features/userSlice';
import { combineReducers } from '@reduxjs/toolkit';


export const rootReducer = combineReducers({
  user: userReducer,
  product: productsReducer
});
