export interface MessageModel {
  id: string;
  message: string;
  type: 'info' | 'success' | 'error';
  duration?: number;
}

export interface MessagesState {
  messages: MessageModel[];
}
