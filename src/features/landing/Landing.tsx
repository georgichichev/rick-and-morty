import { LinkIcon, StarIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';

export const Landing = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      gap={10}
      justify="center"
      align="center"
      h="100vh"
      bg="gray.800"
    >
      <Heading color="gray.100" size="4xl">
        Rick and Morty API
      </Heading>
      <Flex gap={5}>
        <Button colorScheme="orange" leftIcon={<StarIcon />}>
          Get Started
        </Button>
        <Button colorScheme="purple" leftIcon={<LinkIcon />}>
          Github Repo
        </Button>
      </Flex>
    </Flex>
  );
};
