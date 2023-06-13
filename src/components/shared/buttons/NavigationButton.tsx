import { theme } from '@/theme';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

interface NavigationButtonProps {
  children: string;
  to: string;
  isMobile?: boolean;
}

interface StyledNavButtonProps {
  isMobile?: boolean;
}

const NavButton = styled(NavLink)<StyledNavButtonProps>(() => ({
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes['lg'],
  color: theme.colors.text.primary,
  ':hover': {
    color: theme.colors.text.primary,
    borderColor: theme.colors.text.hover,
  },
  transition: 'ease-in-out 0.2s',
  paddingBottom: theme.space[1],
}));

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
