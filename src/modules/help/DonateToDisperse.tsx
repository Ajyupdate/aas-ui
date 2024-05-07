import { Box, Center, Heading } from "@chakra-ui/react";
import Header, { Jacques } from "../landing/components/Navbar";

export default function DonateToDisperse() {
  return (
    <Box>
      <Header />
      <Heading mb={2} mt={10}>
        <Center fontSize={"50px"} className={Jacques.className}>
          How Assist A Student Works
        </Center>
      </Heading>
    </Box>
  );
}
