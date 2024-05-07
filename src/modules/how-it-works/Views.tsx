import {
  Box,
  Center,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Header, { Jacques } from "../landing/components/Navbar";

export default function HowItWorks() {
  return (
    <Box>
      <Header />
      <Heading mb={2} mt={10}>
        <Center fontSize={"50px"} className={Jacques.className}>
          How Assist A Student Works
        </Center>
      </Heading>

      <p className="md:mx-[15%] w-100 text-center text-gray-500 dark:text-gray-400">
        Assist A Student is a social good platform built to help students in the
        University of Lagos fundraise for school-related funding; school fees,
        dues, and other fees. Since the increase in tertiary institution fees by
        the Federal Government, a lot of students have found it difficult to
        keep schooling and the AAS platform seeks to solve this problem.
      </p>

      <Box mt={"5%"} mx={{ md: 20, base: 6 }}>
        <Heading fontSize={"28px"} fontWeight={400}>
          How to set up as a student
        </Heading>
        <UnorderedList mt={6}>
          <ListItem color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            Select sign up as a student
          </ListItem>
          <ListItem my={3} color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            Provide the required details and create an account
          </ListItem>
          <ListItem color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            Select “For students” at the top of the page
          </ListItem>
          <ListItem color={"#9B9999"} mt={3} fontSize={"16px"} fontWeight={400}>
            Provide details of the kind of help you need
          </ListItem>
          <ListItem my={3} color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            Attach payment advice or document to support your claim
          </ListItem>
          <ListItem my={3} color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            Attach a short video (maximum duration of 1 minute) for further
            request verification
          </ListItem>
          <ListItem color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            Click submit and your request will be posted for the community to
            see
          </ListItem>
        </UnorderedList>
      </Box>

      <Box mt={"5%"} mx={{ md: 20, base: 6 }}>
        <Heading fontSize={"28px"} fontWeight={400}>
          How to set up to provide help
        </Heading>
        <UnorderedList mt={6}>
          <ListItem color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            Select “Help” at the top of the page
          </ListItem>
          <ListItem my={3} color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            You can sign up to have access to a dashboard or help anonymously
          </ListItem>
          <ListItem color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            Begin browsing, and provide help
          </ListItem>
          <ListItem my={3} color={"#9B9999"} fontSize={"16px"} fontWeight={400}>
            You can choose to provide funds to be disbursed by the AAS platform
            or assist randomly
          </ListItem>
        </UnorderedList>
        Note: You can donate anonymously.
      </Box>

      <Heading mb={2} mt={"10%"}>
        <Center fontSize={"28px"} fontWeight={400}>
          Safe way to assist students in need
        </Center>
      </Heading>

      <p className="md:mx-[20%] w-100 text-center text-gray-500 dark:text-gray-400">
        Assist A Student is a trusted platform to fundraise for students in the
        University of Lagos. It is a relatively new platform looking to expand
        to other Federal Universities but will be pioneered from the University
        of Lagos.
      </p>
    </Box>
  );
}
