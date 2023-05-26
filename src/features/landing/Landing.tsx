import { theme } from '@/theme';
import { ArrowForwardIcon, LinkIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <Flex
      w="100%"
      direction="column"
      gap={10}
      justify="center"
      align="center"
      h="100vh"
      bg={theme.colors.background}
    >
      <Heading color="gray.100" size="4xl">
        Rick and Morty API
      </Heading>
      <Flex gap={5}>
        <Button
          colorScheme="orange"
          rightIcon={<ArrowForwardIcon />}
          onClick={() => navigate('/app')}
        >
          Get Started
        </Button>
        <Link href="https://github.com/georgichichev/rick-and-morty" target="blank">
          <Button colorScheme="purple" leftIcon={<LinkIcon />}>
            Github Repo
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
