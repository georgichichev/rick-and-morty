import { NavigationButton } from '@/components/shared/buttons';
import { StarIcon } from '@chakra-ui/icons';
import { Flex, ListItem, UnorderedList, theme } from '@chakra-ui/react';

export type NavigationItem = {
  name: string;
  to: string;
};

const navigation: NavigationItem[] = [
  { name: 'Characters', to: 'characters' },
  { name: 'Episodes', to: 'episodes' },
  { name: 'Locations', to: 'locations' },
];

export const Header = () => {
  return (
    <Flex justify="space-between" align="center" height={50} paddingBottom={theme.space[5]}>
      <StarIcon fontSize="2xl" />
      <UnorderedList display={{ base: 'none', md: 'flex' }} styleType="none" gap={theme.space[6]}>
        {navigation.map((navItem) => {
          return (
            <ListItem>
              <NavigationButton to={navItem.to}>{navItem.name}</NavigationButton>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Flex>
  );
};
