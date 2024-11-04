import { Providers } from '@/app/providers/Providers';
import { AppRouter } from '@/app/router';

// TODO: create 403 (token expired) handler
// TODO: change app icon
// TODO: rewrite files name
// TODO: pages lazy loading

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
