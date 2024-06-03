import { formatTimeAgo } from "@/components/formatTimeAgo";
import { iPostsProps } from "@/types/Posts";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Jacques_Francois_Shadow } from "next/font/google";
import { useState } from "react";
import Testimonials from "./Testimonials";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

interface iNeedHelpProps {
  posts: iPostsProps[];
}
const Jacques = Jacques_Francois_Shadow({ subsets: ["latin"], weight: "400" });
export default function NeedHelp({ posts }: iNeedHelpProps) {
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    // Toggle the clicked state
    setSaved(!saved);
  };

  return (
    <div>
      <Grid
        templateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
        mr={{ md: "10%", base: "unset" }}
        gap={12}
      >
        {posts?.map((post) => (
          <GridItem
            w="100%"
            cursor={"pointer"}
            key={post.post_id}
            h="100%"
            rounded="xl"
          >
            {" "}
            {/* Apply rounded corners to the GridItem */}
            <Link _hover={{ textDecoration: "none" }} href={`/posts/1`}>
              <Flex flexDirection="column">
                <Box bgColor="teal" p={4} pl={6} h="50%" roundedTop="xl">
                  {" "}
                  {/* Apply rounded top corners to the first Box */}
                  <VStack align="start" spacing={2} color="white">
                    <Flex mb={4}>
                      <Tag
                        h="30px" // Height
                        borderRadius="20px" // Border radius
                        padding="5px 10px" // Padding
                        gap="10px" // Gap between elements (for button group)
                        size="sm"
                        fontSize={"14px"}
                        fontWeight={400}
                      >
                        {post.student?.faculty}
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
                      >
                        {post.student?.department}
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
                      >
                        {post.category}
                      </Tag>
                    </Flex>
                    <Heading
                      color="white"
                      as="h1"
                      fontSize="large"
                      fontWeight="bold"
                    >
                      {post.title}
                    </Heading>
                  </VStack>
                </Box>
                <Box
                  width="100%"
                  py={2}
                  pl={6}
                  bg="white"
                  h="50%"
                  roundedBottom="xl"
                >
                  {" "}
                  {/* Apply rounded bottom corners to the second Box */}
                  <VStack align="start" spacing={2}>
                    <HStack
                      spacing={2}
                      align="center"
                      justifyContent="space-between"
                    >
                      <HStack spacing={4} align="center">
                        <Avatar
                          height="50px"
                          width="50px"
                          name={"Ajibade Emmanuel"}
                          src="https://bit.ly/dan-abramov"
                          size="md"
                        />
                        <Text fontSize="18px" fontWeight={400}>
                          {post.student?.first_name} {post.student?.last_name}
                        </Text>
                      </HStack>
                    </HStack>
                    {/* <Divider color="gray" fontWeight="md" /> */}
                    <p className="pr-8 line-clamp-3 leading-6 text-[16px] text-[#272727]">
                      {post.content}
                    </p>
                    <Flex justify="flex-end" mt={4}>
                      <Box>
                        <Text
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#A1A1A1"}
                        >
                          Read More
                        </Text>
                      </Box>
                    </Flex>

                    <Text fontSize="16px" fontWeight={400} color="[#9B9999]">
                      Published{" "}
                      {post.createdAt && formatTimeAgo(post?.createdAt)}
                    </Text>
                  </VStack>
                </Box>
              </Flex>
            </Link>
          </GridItem>
        ))}
      </Grid>
      <Center mr={{ md: "10%", base: "0" }} mt={8}>
        <Button
          fontWeight={"medium"}
          color={"white"}
          bg={"#008080"}
          w="99px" // Width
          h="35spx" // Height
          borderRadius="30px" // Border radius
          padding="10px 20px" // Padding
          gap="10px" // Gap between elements (for button group)
        >
          View more
        </Button>
      </Center>

      <Center
        mt={20}
        mb={16}
        fontSize={"36px"}
        mr={{ md: "10%", base: "0" }}
        className={Jacques.className}
      >
        Testimonials
      </Center>

      <Testimonials />
    </div>
  );
}
