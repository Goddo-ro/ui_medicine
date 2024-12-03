import { diseaseApi } from '@/entities/disease';
import { medicineApi } from '@/entities/medicine';
import { transactionApi } from '@/entities/transaction';
import { AuthReducer } from '@/entities/viewer';
import { authApi } from '@/entities/viewer';
import { searchApi } from '@/features/search';
import { MessagesReducer } from '@/widgets/messagesProvider';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [medicineApi.reducerPath]: medicineApi.reducer,
    [diseaseApi.reducerPath]: diseaseApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    authReducer: AuthReducer,
    messagesReducer: MessagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      medicineApi.middleware,
      diseaseApi.middleware,
      transactionApi.middleware,
      authApi.middleware,
      searchApi.middleware,
    ]),
});

export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
