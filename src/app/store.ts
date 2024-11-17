import { diseaseApi } from '@/entities/disease/api';
import { medicineApi } from '@/entities/medicine/api';
import { AuthReducer } from '@/entities/viewer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [medicineApi.reducerPath]: medicineApi.reducer,
    [diseaseApi.reducerPath]: diseaseApi.reducer,
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      medicineApi.middleware,
      diseaseApi.middleware,
    ]),
});

export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
