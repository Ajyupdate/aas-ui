import { formatTimeAgo } from "@/components/formatTimeAgo";
import { iPostsProps } from "@/types/Posts";
import {
  Avatar,
  Box,
  Button,
  Divider,
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
import { useState } from "react";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

interface iNeedHelpProps {
  posts: iPostsProps[];
}
export default function NeedHelp({ posts }: iNeedHelpProps) {
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    // Toggle the clicked state
    setSaved(!saved);
  };

  return (
    <div>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {posts?.map((post) => (
          <GridItem w="100%" key={post.post_id} h={"100%"}>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              href={`/posts/${post.post_id}`}
            >
              <Flex flexDirection="column">
                <Box bgColor={"teal"} p={4} pl={6} h="50%">
                  <VStack align="start" spacing={2} color="white">
                    <Flex mb={4}>
                      <Tag size={"sm"}> {post.student?.faculty}</Tag>
                      <Tag ml={1} size={"sm"}>
                        {" "}
                        {post.student?.department}
                      </Tag>
                      <Tag ml={1} size={"sm"}>
                        {post.category}
                      </Tag>
                    </Flex>

                    <Heading
                      color={"white"}
                      as={"h1"}
                      fontSize="large"
                      fontWeight="bold"
                    >
                      {post.title}
                    </Heading>
                  </VStack>
                </Box>
                <Box width="100%" py={2} pl={6} bg={"white"} h="50%">
                  <VStack align="start" spacing={2}>
                    <Text fontSize="sm" color={"gray.500"}>
                      Published{" "}
                      {post?.createdAt === undefined
                        ? ""
                        : formatTimeAgo(post?.createdAt)}
                    </Text>
                    <HStack
                      spacing={2}
                      align="center"
                      justifyContent="space-between"
                    >
                      <HStack spacing={2} align="center">
                        <Avatar
                          height={"30px"}
                          width={"30px"}
                          name={`${post.student?.first_name} ${post.student?.last_name}`}
                          src="https://bit.ly/dan-abramov"
                          size="md"
                        />
                        <Text fontSize={"13px"}>
                          {post.student?.last_name} {post.student?.first_name}
                        </Text>
                      </HStack>
                    </HStack>
                    <Divider color={"gray"} fontWeight={"md"} />
                    <p className="line-clamp-3 text-sm">{post.content}</p>

                    <Flex justify={"flex-end"} mt={4}>
                      <Box>
                        <Button size={"xs"} colorScheme="teal">
                          Read More
                        </Button>
                      </Box>
                    </Flex>
                  </VStack>
                </Box>{" "}
              </Flex>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
