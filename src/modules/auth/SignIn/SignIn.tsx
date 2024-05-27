import { Jacques } from "@/modules/landing/components/Navbar";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <div>
      <Flex>
        <Box width={"30%"}>
          <Text className={Jacques.className}>AAS </Text>
          <Heading>Welcome</Heading>
          <Heading>Sign in to Finch</Heading>
        </Box>

        <Box width={"70%"}>
          <Flex justify={"flex-end"}>Don&apos;t have an account yet?</Flex>
        </Box>
      </Flex>
    </div>
  );
}
