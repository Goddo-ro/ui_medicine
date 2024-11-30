import { AuthState } from '@/entities/viewer/model/types';
import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/shared/lib/store';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.auth,
);

export const selectAuth = createSelector(
  selectBase,
  (state: AuthState) => state.isAuth,
);

export const selectLoading = createSelector(
  selectBase,
  (state: AuthState) => state.isLoading,
);
