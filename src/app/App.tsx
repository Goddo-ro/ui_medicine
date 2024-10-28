import { Providers } from '@/app/providers/Providers';
import { AppRouter } from '@/app/router';

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
