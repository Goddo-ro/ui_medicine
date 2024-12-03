import { Providers } from '@/app/providers/Providers';
import { AppRouter } from '@/app/router';
import { MessagesProvider } from '@/widgets/messagesProvider';

// TODO: refactor FSD app structure

function App() {
  return (
    <Providers>
      <MessagesProvider />
      <AppRouter />
    </Providers>
  );
}

export default App;
