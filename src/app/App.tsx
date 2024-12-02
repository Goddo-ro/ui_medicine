import { Providers } from '@/app/providers/Providers';
import { AppRouter } from '@/app/router';
import { MessagesProvider } from '@/widgets/messagesProvider';

// TODO: create 403 (token expired) handler

function App() {
  return (
    <Providers>
      <MessagesProvider />
      <AppRouter />
    </Providers>
  );
}

export default App;
