import { theme as chakraTheme } from '@chakra-ui/react';

export const theme = {
  ...chakraTheme,
  colors: {
    background: {
      default: chakraTheme.colors.gray[800],
    },
    text: {
      primary: chakraTheme.colors.gray[100],
      hover: chakraTheme.colors.orange[300],
      disabled: '#7E7E7E',
    },
    brand: { orange: chakraTheme.colors.orange[300] },
  },
};
