import { authApi } from '@/entities/viewer';
import { AuthState } from '@/entities/viewer/model/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isLoading: false,
} satisfies AuthState as AuthState;

const authSlice = createSlice({
  name: 'authReducer',
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
    builder.addMatcher(
      authApi.endpoints.isLoggedIn.matchFulfilled,
      (state, { payload }) => {
        state.isAuth = payload;
        state.isLoading = false;
      },
    );
    builder.addMatcher(authApi.endpoints.isLoggedIn.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(authApi.endpoints.isLoggedIn.matchRejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const AuthReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
