import { theme } from '@/theme';
import { styled } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationButtonProps {
  children: string;
  to: string;
}

const NavButton = styled(NavLink, {
  baseStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes['lg'],
    color: theme.colors.text.primary,
    _hover: {
      color: theme.colors.text.hover,
      borderColor: theme.colors.text.hover,
    },
    transition: 'ease-in-out 0.2s',
    paddingBottom: theme.space[1],
  },
});

export const NavigationButton: FC<NavigationButtonProps> = ({ children, to }) => {
  return (
    <NavButton
      to={to}
      style={({ isActive }) => ({
        borderBottom: isActive ? `1px solid` : 'none',
      })}
    >
      {children}
    </NavButton>
  );
};
