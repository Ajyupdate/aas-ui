import { formatTimeAgo } from "@/components/formatTimeAgo";
import Header from "@/modules/landing/components/Navbar";
import { iPostsProps } from "@/types/Posts";
import { iSchoolInfoProps } from "@/types/SchoolInfo";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

export default function PostDetails() {
  const [post, setPost] = useState<iPostsProps | null>(null);
  const [bills, setBills] = useState<iSchoolInfoProps>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState("");
  const slugParams = useParams();
  const router = useRouter();
  //   console.log(slugParams.id);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const handleAmountSubmit = () => {
    console.log(amount);
    router.push(`/paystack?amount=${amount}`);
  };
  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const response = await axios.get(
          `${API_ENDPOINT}/posts/${slugParams.id}`
        );

        setPost(response.data);
      } catch (error) {}
    };
    fetchSinglePost();
  }, [slugParams.id]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/school-info/a6eb6521-28fb-496c-8a25-56a5be1af5ef`
        );
        setBills(response.data);
        console.log(response.data);
      } catch (error) {}
    };
    fetchBills();
  }, [slugParams.id]);
  return (
    <Box mx={{ md: "8px" }}>
      <Header />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Heading fontSize={"x-small"} as={"h6"}>
              You are about to help {post?.student?.first_name} with part/full
              of the outstanding school fees
            </Heading>

            <Box mt={8}>
              <Flex justify={"space-between"}>
                <Box>
                  session: <br />
                  {bills?.outstanding_fee.bills_title}
                </Box>

                <Box>
                  <Text>Amount You want to help with in Naira:</Text>
                  <Input
                    onChange={(e) => handleAmountChange(e)}
                    size="sm"
                    type="number"
                  />
                </Box>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              w={1000}
              size={"sm"}
              colorScheme="teal"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              onClick={handleAmountSubmit}
              w={1000}
              size={"sm"}
              variant="outline"
            >
              Pay now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        flexDirection={{ md: "row", base: "column" }}
        mt={8}
        height="100vh"
        ml={{ md: 24 }}
        mr={4}
      >
        <Box width="70%">
          <Stack spacing={4}>
            <Box display="inline-block">
              <HStack>
                <Text textTransform="uppercase" fontSize={"11px"}>
                  {post?.student?.first_name} {post?.student?.last_name} |
                </Text>
                <Text fontSize={"11px"}>
                  Posted{" "}
                  {post?.createdAt === undefined
                    ? ""
                    : formatTimeAgo(post?.createdAt)}
                </Text>
              </HStack>
            </Box>

            <Heading fontSize={"x-large"}>{post?.title}</Heading>
          </Stack>

          <Divider my="2" />
          <Text fontSize="large" mr={3}>
            {post?.content}
          </Text>
          <Divider my={2} />

          <Box mr={6}>
            <Stack onClick={onOpen} my={8}>
              <Card
                variant="outline"
                _hover={{
                  border: "1px solid teal",
                  boxShadow: "md",
                  transform: "scale(1.04)",
                  // transform: "translateY(-24px)",
                  transition: "0.3s",
                }}
              >
                <CardBody>
                  <Heading size="md">
                    {bills?.outstanding_fee.bills_title}
                  </Heading>
                  <Text py="2">{bills?.outstanding_fee.session}</Text>
                </CardBody>

                <Flex justify={"space-between"} mx={6}>
                  <Text fontWeight={"bold"}>
                    {bills?.outstanding_fee.amount} Naira
                  </Text>
                  <Text fontWeight={"bold"} ml={8}>
                    Help
                  </Text>
                </Flex>
              </Card>
            </Stack>
          </Box>

          <Divider my="2" />

          <Box mx={4}>
            <Heading>About Student</Heading>
            <Text>
              Student at {post?.student?.school}, first class CGPA. Needs the
              sum of 20000 naira to pay school fees. 10000 minimum to register
              course . balance needed to write exam
            </Text>

            <Box height={"20vh"}>
              <Flex>
                <Tag>Faculty of {post?.student?.faculty}</Tag>
                <Tag ml={4}>Department of {post?.student?.department}</Tag>
                <Tag ml={4}>{post?.category}</Tag>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box width="0.5" bg="#ccc" height="100%" />

        {/* Right Section (30%) */}
        <Box width="30%" padding="4">
          <Flex flexDirection={{ md: "column", base: "row" }}>
            <Button
              onClick={onOpen}
              w={{ base: "50%", md: "100%" }}
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.600" }}
              _active={{ bg: "teal.700" }}
              rounded="full" // or use "md" for medium curve or "lg" for large curve
              border="2px solid teal.500" // Border color matches the background color
              borderColor="teal.500" // Border color matches the background color
              px="4" // Horizontal padding
              py="2" // Vertical padding
            >
              Help pay
            </Button>

            <Button
              mt={{ md: 2 }}
              w={{ base: "50%", md: "100%" }}
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.600" }}
              _active={{ bg: "teal.700" }}
              rounded="full" // or use "md" for medium curve or "lg" for large curve
              border="2px solid teal.500" // Border color matches the background color
              borderColor="teal.500" // Border color matches the background color
              px="4" // Horizontal padding
              py="2" // Vertical padding
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                // fill={saved ? "green" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <Text ml={2}>Save Post</Text>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
