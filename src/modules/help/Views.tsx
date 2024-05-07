import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Header, { Jacques } from "../landing/components/Navbar";

export default function Help() {
  const router = useRouter();
  return (
    <Box>
      <Header />
      <Heading mb={2} mt={10}>
        <Center fontSize={"50px"} className={Jacques.className}>
          How do you want to help today?
        </Center>
      </Heading>
      <p className="md:mx-[15%] w-100 text-center text-gray-500 dark:text-gray-400">
        Assist A Student is a social good platform built to help students in the
        University of Lagos fundraise for school-related challenges; school
        fees, dues, and other fees. Alumni and the community looking to donate
        can do so in two ways:
      </p>

      <Center mt={12}>
        <Button
          onClick={() => router.push("/help/donate-to-disperse")}
          px={8}
          py={4}
          colorScheme="teal"
          variant="outline"
        >
          <span className="px-8 py-8 text-[#121212] font-['20px'] text-[400]">
            Donate funds for the AAS system to disperse
          </span>
        </Button>
      </Center>
      <Center mt={4}>
        <Button px={20} py={4} colorScheme="teal" variant="outline">
          <span className="px-8 py-8 text-[#121212] font-['20px'] text-[400]">
            Help random students in need
          </span>
        </Button>
      </Center>
    </Box>
  );
}
