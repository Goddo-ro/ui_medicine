import {
  MessageModel,
  MessagesState,
} from '@/widgets/messagesProvider/model/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: MessagesState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messagesReducer',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<MessageModel>) {
      state.messages.push(action.payload);
    },
    removeMessage(state, action: PayloadAction<string>) {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload,
      );
    },
  },
});

export const MessagesReducer = messagesSlice.reducer;
export const { addMessage, removeMessage } = messagesSlice.actions;
