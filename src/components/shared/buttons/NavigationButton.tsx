import { styled, theme } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationButtonProps {
  children: string;
  to: string;
}

const NavButton = styled(NavLink, {
  baseStyle: {
    color: theme.colors.orange[300],
    _hover: { color: 'white' },
    transition: 'ease-in-out 0.2s',
  },
});

export const NavigationButton: FC<NavigationButtonProps> = ({ children, to }) => {
  return (
    <NavButton to={to} style={({ isActive }) => ({ color: isActive ? 'yellow' : '' })}>
      {children}
    </NavButton>
  );
};
