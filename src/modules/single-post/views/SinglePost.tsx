import { formatTimeAgo } from "@/components/formatTimeAgo";
import Header from "@/modules/landing/components/Navbar";
import { iPostsProps } from "@/types/Posts";
import { iSchoolInfoProps } from "@/types/SchoolInfo";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tag,
  Text,
  VStack,
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

  console.log(post);
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
      <Box pt={8}>
        <Header />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Heading fontSize={"x-small"} as={"h6"}>
              You are about to help Ajibade Emmanuel with part/full of the
              outstanding school fees
            </Heading>

            <Box mt={8}>
              <Flex justify={"space-between"}>
                <Box>
                  session: <br />
                  2021/2022
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
      <Flex mx={{ md: 20, base: 6 }} mt={8}>
        <Box bgColor="teal" p={8} rounded="xl">
          {" "}
          {/* Apply rounded top corners to the first Box */}
          <VStack align="start" spacing={2} color="white">
            <Heading fontSize={"20px"} fontWeight={400}>
              {post?.category}
            </Heading>
            d
            <Text fontSize={"16px"} mt={4} fontWeight={400}>
              2023/2024
            </Text>
            <Flex mb={1} mt={2}>
              <Tag
                h="30px" // Height
                borderRadius="20px" // Border radius
                padding="5px 10px" // Padding
                gap="10px" // Gap between elements (for button group)
                size="sm"
                fontSize={"14px"}
                fontWeight={400}
                color={"#727272"}
              >
                {post?.student?.faculty}
              </Tag>
              <Tag
                ml={1}
                h="30px" // Height
                borderRadius="20px" // Border radius
                padding="5px 10px" // Padding
                gap="10px" // Gap between elements (for button group)
                size="sm"
                fontSize={"14px"}
                fontWeight={400}
                color={"#727272"}
              >
                {post?.student?.department}
              </Tag>
              <Tag
                ml={1}
                h="30px" // Height
                borderRadius="20px" // Border radius
                padding="5px 10px" // Padding
                gap="10px" // Gap between elements (for button group)
                size="sm"
                fontSize={"14px"}
                fontWeight={400}
                color={"#727272"}
              >
                {post?.category}
              </Tag>
            </Flex>
          </VStack>
        </Box>
      </Flex>

      <Text my={8} mx={{ md: 20, base: 6 }} color={"#9B9999"}>
        {post?.student?.first_name} {post?.student?.last_name} | Published{" "}
        {post?.createdAt ? formatTimeAgo(post?.createdAt) : ""}
      </Text>

      <Heading
        mx={{ md: 20, base: 6 }}
        fontWeight={400}
        color={"#121212"}
        fontSize={"24px"}
      >
        {post?.title}
      </Heading>

      <Text
        mt={8}
        fontSize={"18px"}
        fontWeight={400}
        ml={{ md: 20, base: 6 }}
        mr={{ md: "30%", base: 6 }}
        color={"#727272"}
      >
        {post?.content}
      </Text>

      <Box my={8} mx={{ md: 20, base: 6 }}>
        <Flex>
          <Button
            fontSize={"16px"}
            fontWeight={400}
            onClick={onOpen}
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
            ml={2}
            colorScheme="teal"
            color={"#121212"}
            // color="white"
            variant={"outline"}
            _hover={{ bg: "teal.600", color: "white" }}
            _active={{ bg: '"teal.700"' }}
            rounded="full" // or use "md" for medium curve or "lg" for large curve
            px="4" // Horizontal padding
            py="2" // Vertical padding
            fontSize={"16px"}
            fontWeight={400}
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
    </Box>
  );
}
