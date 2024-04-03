import { formatTimeAgo } from "@/components/formatTimeAgo";
import Header from "@/modules/landing/components/Navbar";
import { iPostsProps } from "@/types/Posts";
import { iSchoolInfoProps } from "@/types/SchoolInfo";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

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
    <Box mx={{ md: "15%" }}>
      <Box h={"100"} mt={4}>
        <Header />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={6}>
            <Heading fontSize={"x-small"} as={"h6"}>
              You are about to help {post?.student?.first_name} with part/full
              of his/her outstanding {bills?.outstanding_fee.bills_title}
            </Heading>

            <Box mt={8}>
              <Flex justify={"space-between"}>
                <Box>
                  <Heading mt={4} fontSize={"sm"} color={"gray.500"}>
                    {bills?.outstanding_fee.bills_title} Funds
                  </Heading>
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
      <Box>
        <Heading fontSize={"x-large"}>{post?.title}</Heading>
        <HStack mt={8} justify={"space-between"}>
          {/* <Avatar
            height={"40px"}
            width={"40px"}
            name={`${post.student?.first_name} ${post.student?.last_name}`}
            src="https://bit.ly/dan-abramov"
            size="md"
          /> */}
          <Box>
            <Box>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                {post?.student?.first_name} {post?.student?.last_name}
              </Text>

              <Flex mt={2}>
                <Text fontSize={"11px"} color={"gray.500"}>
                  200 Level Student{" "}
                </Text>
                <Text mx={2} fontSize={"11px"}>
                  {" "}
                  |{" "}
                </Text>
                <Text fontSize={"11px"}>
                  {" "}
                  Posted {post?.createdAt === undefined
                        ? ""
                        : formatTimeAgo(post?.createdAt)}
                </Text>
              </Flex>
            </Box>
            {/* <Text fontSize={"11px"}>
              Posted{" "}
              {post?.createdAt === undefined
                ? ""
                : formatTimeAgo(post?.createdAt)}
            </Text> */}
          </Box>

          <HStack>
            <Box mt={2}>
              <FaRegHeart />
            </Box>

            <Box mx={4} mt={2}>
              <FaRegBookmark />
            </Box>

            <Button
              onClick={onOpen}
              size={"sm"}
              mt={{ md: 2 }}
              // w={{ base: "50%", md: "100%" }}
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.600" }}
              _active={{ bg: "teal.700" }}
              rounded="full"
              border="2px solid teal.500"
              borderColor="teal.500"
              // px="4"
              // py="2"
            >
              Help pay
            </Button>
          </HStack>
        </HStack>

        <Text mt={4} my={8}>
          {post?.content}
        </Text>
        <Flex alignItems="center" my={12}>
          <Divider flex="1" borderColor="black" />
          <Text mx="4" fontSize="xl" fontWeight="bold">
            Student Details
          </Text>
          <Divider flex="1" borderColor="black" />
        </Flex>

        <Box bg={"gray.50"} mb={16}>
          <Grid templateColumns="repeat(3, 1fr)">
            <Flex p={4}>
              <Box border="2px solid teal" />
              <Box ml={2}>
                <Text color={"gray.500"}>Name:</Text>
                <Text>
                  {post?.student?.first_name} {post?.student?.last_name}
                </Text>
              </Box>
            </Flex>
            <Flex p={4}>
              <Box border="2px solid teal" />
              <Box ml={2}>
                <Text color={"gray.500"}>Faculty:</Text>
                <Text>{post?.student?.faculty}</Text>
              </Box>
            </Flex>
            <Flex p={4}>
              <Box border="2px solid teal" />
              <Box ml={2}>
                <Text color={"gray.500"}>Department:</Text>
                <Text>{post?.student?.department}</Text>
              </Box>
            </Flex>
            <Flex p={4}>
              <Box border="2px solid teal" />
              <Box ml={2}>
                <Text color={"gray.500"}>Level:</Text>
                <Text>200 </Text>
              </Box>
            </Flex>
            <Flex p={4}>
              <Box border="2px solid teal" />
              <Box ml={2}>
                <Text color={"gray.500"}>Email:</Text>
                <Text>{post?.student?.email}</Text>
              </Box>
            </Flex>

            <Flex p={4}>
              <Box border="2px solid teal" />
              <Box ml={2}>
                <Text color={"gray.500"}>Academic Session:</Text>
                <Text>{bills?.outstanding_fee.session} </Text>
              </Box>
            </Flex>

            <Flex p={4}>
              <Box border="2px solid teal" />
              <Box ml={2}>
                <Text color={"gray.500"}>Amount Needed:</Text>
                <Text>{bills?.outstanding_fee.amount}</Text>
              </Box>
            </Flex>

            <Flex p={4}>
              <Box border="2px solid teal" />
              <Box ml={2}>
                <Text color={"gray.500"}>Request Type:</Text>
                <Text>{post?.category}</Text>
              </Box>
            </Flex>
          </Grid>
          <Box p={4}>
            <Button onClick={onOpen} width="100%" colorScheme="teal">
              Help pay any amount
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <Flex
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

        
        <Box width="30%" padding="4">
          <Flex flexDirection={{ md: "column", base: "row" }}>
             

            <Button
              mt={{ md: 2 }}
              w={{ base: "50%", md: "100%" }}
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.600" }}
              _active={{ bg: "teal.700" }}
              rounded="full"
              border="2px solid teal.500" 
              borderColor="teal.500" 
              px="4" 
              py="2" 
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <Text ml={2}>Save Post</Text>
            </Button>
          </Flex> */}
      {/* </Box>
      </Flex> */}
    </Box>
  );
}
