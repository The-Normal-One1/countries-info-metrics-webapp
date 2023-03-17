import { configureStore } from '@reduxjs/toolkit';
import countries from './countrySlice';

const store = configureStore({
  reducer: {
    countries,
  },
});
export default store;
