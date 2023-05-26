import { Landing } from '@/features/landing';
import { Outlet, useRoutes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div>App header</div>
      <Outlet />
    </>
  );
};
export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/app',
      element: <App />,
      children: [
        { path: 'characters', element: <div>Characters page</div> },
        { path: '', element: <div>Dashboard page</div> },
      ],
    },
    { path: '*', element: <div>Page not found...</div> },
  ];

  const element = useRoutes(commonRoutes);

  return element;
};
