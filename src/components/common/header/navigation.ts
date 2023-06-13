type NavigationItem = {
  name: string;
  to: string;
};

export const navigation: NavigationItem[] = [
  { name: 'Characters', to: 'characters' },
  { name: 'Episodes', to: 'episodes' },
  { name: 'Locations', to: 'locations' },
];
