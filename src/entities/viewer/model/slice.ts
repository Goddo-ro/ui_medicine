import {
  checkAuth,
  loginThunk,
  logoutThunk,
  registerThunk,
} from '@/entities/viewer/model/thunks';
import { AuthState } from '@/entities/viewer/model/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isLoading: false,
} satisfies AuthState as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
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
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isAuth = !action.payload;
        state.isLoading = false;
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isAuth = action.payload;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isAuth = action.payload;
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const AuthReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
