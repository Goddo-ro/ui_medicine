import { checkAuth, logoutThunk } from '@/entities/viewer/model/thunks';
import { IAuthState } from '@/entities/viewer/model/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isLoading: false,
} satisfies IAuthState as IAuthState;

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
      });
  },
});

export const AuthReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
