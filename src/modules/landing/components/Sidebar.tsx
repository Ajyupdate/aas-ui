import {
  Avatar,
  Box,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box bg={"white"} p={4}>
      <Heading fontSize={"md"}>Testimonies</Heading>
      <Divider my={2} />
      <Stack>
        <Text fontSize={"small"}>
          Deeply grateful to this incredible community and the amazing platform
          for the overwhelming support in funding my school fees. Your
          generosity has not only lifted a financial burden but has ignited a
          flame of hope and determination within me. Thank you for believing in
          the power of education and making a lasting impact on my future.
        </Text>
        <HStack spacing={2} align="center">
          <Avatar
            height={"30px"}
            width={"30px"}
            name="Assisat Osohola"
            src="https://bit.ly/code-beast"
            size="md"
          />
          <Text fontSize="sm">Assisat Osohola</Text>
        </HStack>
      </Stack>

      <Divider my={4} />

      <Stack>
        <Text fontSize={"small"}>
          Overflowing gratitude to our wonderful community and the incredible
          platform for the generous support in funding my lab manuals. Your
          contributions are instrumental in keeping me in school and getting a
          good grade
        </Text>
        <HStack spacing={2} align="center">
          <Avatar
            height={"30px"}
            width={"30px"}
            name="Assisat Osohola"
            src="https://bit.ly/code-beast"
            size="md"
          />
          <Text fontSize="sm">Assisat Osohola</Text>
        </HStack>
      </Stack>
    </Box>
  );
}
