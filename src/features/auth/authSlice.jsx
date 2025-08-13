// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'unknown', // 'unknown' | 'authenticated' | 'anonymous'
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      state.status = 'authenticated';
      state.user = action.payload ?? null;
    },
    setAnonymous(state) {
      state.status = 'anonymous';
      state.user = null;
    },
  },
});

export const { setAuthenticated, setAnonymous } = authSlice.actions;
export const selectAuthStatus = (state) => state.auth.status;
export const selectIsAuthenticated = (state) => state.auth.status === 'authenticated';
export default authSlice.reducer;