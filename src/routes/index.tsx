import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <div>Welcome to the app</div> }];

  const element = useRoutes(commonRoutes);

  return element;
};
