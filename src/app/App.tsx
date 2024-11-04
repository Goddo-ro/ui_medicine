import { Providers } from '@/app/providers/Providers';
import { AppRouter } from '@/app/router';

// TODO: create 403 (token expired) handler

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
