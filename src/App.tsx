import { AppProvider } from '@/providers/app-provider';

function App() {
  return (
    <AppProvider>
      <div>Rick and morty</div>
    </AppProvider>
  );
}

export default App;
