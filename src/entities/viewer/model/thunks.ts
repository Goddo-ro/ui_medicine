import { isLoggedIn, login, logout } from '@/entities/viewer/api/auth';
import { IData } from '@/entities/viewer/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await isLoggedIn();
      if (response.status !== 200) {
        return false;
      }
      return true;
    } catch (error) {
      const knownError = error as Error;
      return rejectWithValue('Error: ' + knownError.message);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await logout();
      if (response.status !== 200) {
        return false;
      }
      return true;
    } catch (error) {
      const knowError = error as Error;
      return rejectWithValue('Error: ' + knowError.message);
    }
  },
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }: IData, { rejectWithValue }) => {
    try {
      const response = await login(email, password);
      if (response.status !== 200) {
        return false;
      }
      return true;
    } catch (error) {
      const knowError = error as Error;
      return rejectWithValue('Error: ' + knowError.message);
    }
  },
);
