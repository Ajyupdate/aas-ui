import { formatTimeAgo } from "@/components/formatTimeAgo";
import Header from "@/modules/landing/components/Navbar";
import { iPostsProps } from "@/types/Posts";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;
export default function PostDetails() {
  const [post, setPost] = useState<iPostsProps>([]);
  const slugParams = useParams();
  //   console.log(slugParams.id);

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const response = await axios.get(
          `${API_ENDPOINT}/posts/${slugParams.id}`
        );

        console.log(response.data);
        setPost(response.data);
      } catch (error) {}
    };
    fetchSinglePost();
  }, [slugParams.id]);
  return (
    <Box>
      <Header />

      <Flex mt={8} height="100vh" ml={{ md: 24 }} mr={4}>
        <Box width="70%">
          <Stack spacing={4}>
            <Heading fontSize={"x-large"}>{post.title}</Heading>
            <Heading mb={4} color={"gray"} as="h6" fontSize={"15px"}>
              Posted {post && formatTimeAgo(post.createdAt)}
            </Heading>
          </Stack>

          <Divider my="2" />
          <Text fontSize="xl">{post.content}</Text>
          <Divider my="2" />
          {/* <Text fontSize="xl">
            <Flex>
              <Tag>Faculty of {post.student?.faculty}</Tag>
              <Tag ml={4}>Department of {post.student?.department}</Tag>
              <Tag ml={4}>{post.category}</Tag>
            </Flex>
          </Text>
          <Divider my={2} /> */}
          <Heading>About Student</Heading>
          <Text>
            Student at {post.student?.school}, first class CGPA. Needs the sum
            of 20000 naira to pay school fees. 10000 minimum to register course
            . balance needed to write exam
            <Flex>
              <Tag>Faculty of {post.student?.faculty}</Tag>
              <Tag ml={4}>Department of {post.student?.department}</Tag>
              <Tag ml={4}>{post.category}</Tag>
            </Flex>
          </Text>
        </Box>

        <Box width="1" bg="#ccc" height="100%" />

        {/* Right Section (30%) */}
        <Box width="30%" padding="4">
          <Flex flexDirection={{ md: "column", base: "row" }}>
            <Button
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
