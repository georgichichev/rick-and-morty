import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '/',
      element: <div>Welcome to the app</div>,
    },
    { path: '*', element: <div>Page not found...</div> },
  ];

  const element = useRoutes(commonRoutes);

  return element;
};
