import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/shared/lib/store';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.messagesReducer,
);

export const selectMessages = createSelector(
  selectBase,
  (state) => state.messages,
);
