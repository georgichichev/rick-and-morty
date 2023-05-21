import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode, Suspense } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ChakraProvider>
      <Suspense fallback={<div>Loading app...</div>}>{children}</Suspense>
    </ChakraProvider>
  );
};
