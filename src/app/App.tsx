import { Providers } from '@/app/providers/Providers';
import { AppRouter } from '@/app/router';

// TODO: create 403 (token expired) handler
// TODO: change app icon
// TODO: rewrite components names
// TODO: pages lazy loading
// TODO: firebase auth

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
