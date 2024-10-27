import { isLoggedIn } from '@/entities/viewer/api/auth';
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
