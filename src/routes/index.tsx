import { Header } from '@/components/common/header';
import { Landing } from '@/features/landing';
import { Box, Container, theme } from '@chakra-ui/react';
import { Outlet, useRoutes } from 'react-router-dom';

const App = () => {
  return (
    <Box width="100%" height="100vh" bg="gray.800" color="gray.100">
      <Container maxWidth="8xl" padding={theme.space[5]}>
        <Header />
        <Outlet />
      </Container>
    </Box>
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
        { path: 'episodes', element: <div>Episodes page</div> },
        { path: 'locations', element: <div>Locations page</div> },
        { path: '', element: <div>Dashboard page</div> },
      ],
    },
    { path: '*', element: <div>Page not found...</div> },
  ];

  const element = useRoutes(commonRoutes);

  return element;
};
