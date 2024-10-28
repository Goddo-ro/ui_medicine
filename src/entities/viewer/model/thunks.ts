import { isLoggedIn, logout } from '@/entities/viewer/api/auth';
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
