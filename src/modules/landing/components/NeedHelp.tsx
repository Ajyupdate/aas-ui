import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { formatTimeAgo } from "@/components/formatTimeAgo";
import { iPostsProps } from "@/types/Posts";
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
      {posts?.map((post) => (
        <Link
          _hover={{
            textDecoration: "none",
          }}
          key={post.post_id}
          href={`/posts/${post.post_id}`}
        >
          <Stack spacing={2} my={4}>
            <Divider />
            <Flex justify={"space-between"}>
              <Box>
                <Heading color={"gray"} as="h6" fontSize={"15px"}>
                  {post && formatTimeAgo(post.createdAt)}
                </Heading>
                {post.title}
              </Box>

              <Box onClick={handleClick} mr={8}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={saved ? "green" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </Box>
            </Flex>

            <Box>{post.content}</Box>
            <Flex>
              <Tag>Faculty of {post.student?.faculty}</Tag>
              <Tag ml={4}>Department of {post.student?.department}</Tag>
              <Tag ml={4}>{post.category}</Tag>
            </Flex>
            <Text>20,000 naira needed minimum to write exam</Text>
          </Stack>
        </Link>
      ))}
    </div>
  );
}
