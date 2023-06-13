import { NavigationButton } from '@/components/shared/buttons';
import { theme } from '@/theme';
import { HamburgerIcon, StarIcon } from '@chakra-ui/icons';
import { Flex, IconButton, ListItem, UnorderedList } from '@chakra-ui/react';
import { useState } from 'react';
import { MobileNavigation } from './MobileNavigation';
import { navigation } from './navigation';

export const Header = () => {
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  const handleMobileNavigationOpen = () => setMobileNavigationOpen(true);
  const handleMobileNavigationClose = () => setMobileNavigationOpen(false);

  return (
    <Flex justify="space-between" align="center" height={50} paddingBottom={theme.space[5]}>
      <StarIcon fontSize="2xl" />
      <UnorderedList display={{ base: 'none', md: 'flex' }} styleType="none" gap={theme.space[6]}>
        {navigation.map((navItem) => {
          return (
            <ListItem key={navItem.to}>
              <NavigationButton to={navItem.to}>{navItem.name}</NavigationButton>
            </ListItem>
          );
        })}
      </UnorderedList>
      <MobileNavigation onClose={handleMobileNavigationClose} open={mobileNavigationOpen} />
      <IconButton
        backgroundColor={theme.colors.background.default}
        display={{ md: 'none' }}
        aria-label="Open mobile navigation"
        onClick={handleMobileNavigationOpen}
        icon={<HamburgerIcon fontSize={theme.space[6]} />}
      />
    </Flex>
  );
};
