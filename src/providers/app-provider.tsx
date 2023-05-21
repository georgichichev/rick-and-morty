import { ReactNode, Suspense } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <Suspense fallback={<div>Loading app...</div>}>{children}</Suspense>;
};
