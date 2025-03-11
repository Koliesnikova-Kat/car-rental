import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// const handlePending = (state) => {
//   state.isLoading = true;
// };

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: (builder) => {
    builder
      // .addCase(register.pending, handlePending)
      // .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(logout.fulfilled, () => initialState);
  },
});

export const authReducer = authSlice.reducer;
