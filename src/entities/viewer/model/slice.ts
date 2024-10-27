import { checkAuth } from '@/entities/viewer/model/thunks';
import { IAuthState } from '@/entities/viewer/model/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: true,
  isLoading: false,
} satisfies IAuthState as IAuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = action.payload;
        state.isLoading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const AuthReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
