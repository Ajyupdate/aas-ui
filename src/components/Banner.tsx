import { Box, Flex, Text } from "@chakra-ui/react";
export default function Banner() {
  return (
    <Flex
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage="url('/auth-bg.jpg')"
      backgroundSize="cover"
      backgroundColor="rgb(227, 227, 227)"
      color="white"
      bgBlendMode="overlay"
    >
      <Box textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Bridging the gap
        </Text>
        <Text fontSize="xl">Making the world a better place</Text>
      </Box>
    </Flex>
  );
}
