import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ChakraProvider>
      <Suspense fallback={<div>Loading app...</div>}>
        <BrowserRouter>{children}</BrowserRouter>
      </Suspense>
    </ChakraProvider>
  );
};
