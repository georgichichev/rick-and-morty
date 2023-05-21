import { Landing } from '@/features/landing';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '/',
      element: <Landing />,
    },
    { path: '*', element: <div>Page not found...</div> },
  ];

  const element = useRoutes(commonRoutes);

  return element;
};
