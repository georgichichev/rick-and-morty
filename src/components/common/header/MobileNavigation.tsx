import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { FC } from 'react';
import { navigation } from './navigation';
import { theme } from '@/theme';
import { NavigationButton } from '@/components/shared/buttons';
import { StarIcon } from '@chakra-ui/icons';

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

export const MobileNavigation: FC<MobileNavigationProps> = ({ open, onClose }) => {
  return (
    <Drawer placement="right" isOpen={open} onClose={onClose}>
      <DrawerContent backgroundColor={theme.colors.brand.orange}>
        <DrawerCloseButton />
        <DrawerHeader display="flex">
          <StarIcon fontSize="2xl" />
        </DrawerHeader>
        <DrawerBody>
          <UnorderedList
            display="flex"
            flexDirection="column"
            styleType="none"
            gap={theme.space[6]}
          >
            {navigation.map((navItem) => {
              return (
                <ListItem key={navItem.to}>
                  <NavigationButton to={navItem.to}>{navItem.name}</NavigationButton>
                </ListItem>
              );
            })}
          </UnorderedList>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
