import { configureStore } from '@reduxjs/toolkit';
import publishersReducer from '../features/publishers/reducers/publishersSlice';

const store = configureStore({
  reducer: {
    publishers: publishersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;