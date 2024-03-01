import { createSlice } from '@reduxjs/toolkit';
import getAllPublishers from '../services/publishers';

const initialState = {
  publishers: [],
};

const publishersSlice = createSlice(
  {
    name: 'publishers',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getAllPublishers.fulfilled, (state, action) => {
        state.publishers = action.payload;
      });
    },
  },
);

export default publishersSlice.reducer;