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
        {/* {posts?.map((post) => ( */}
        <GridItem w="100%" key={1} h={"100%"}>
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href={`/posts/1`}
          >
            <Flex flexDirection="column">
              <Box bgColor={"teal"} p={4} pl={6} h="50%">
                <VStack align="start" spacing={2} color="white">
                  <Flex mb={4}>
                    <Tag size={"sm"}> Science</Tag>
                    <Tag ml={1} size={"sm"}>
                      {" "}
                      Mathematics
                    </Tag>
                    <Tag ml={1} size={"sm"}>
                      School Fees
                    </Tag>
                  </Flex>

                  <Heading
                    color={"white"}
                    as={"h1"}
                    fontSize="large"
                    fontWeight="bold"
                  >
                    Please I need help to pay for my first semester school fees
                  </Heading>
                </VStack>
              </Box>
              <Box width="100%" py={2} pl={6} bg={"white"} h="50%">
                <VStack align="start" spacing={2}>
                  <Text fontSize="sm" color={"gray.500"}>
                    Published 3 months ago
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
                        name={`Ajibade Emmanuel`}
                        src="https://bit.ly/dan-abramov"
                        size="md"
                      />
                      <Text fontSize={"13px"}>Ajibade Emmanuel</Text>
                    </HStack>
                  </HStack>
                  <Divider color={"gray"} fontWeight={"md"} />
                  <p className="line-clamp-3 text-sm">
                    Dear friends, alumni and community, I am reaching out with a
                    humble request for your support. I am in need of financial
                    assistance to fund my first semester school fees at the
                    university of Lagos . Every contribution, no matter the
                    size, will make a significant impact on my journey. Your
                    generosity will not only help me achieve my educational
                    goals but also empower me to give back to the community in
                    the future. Thank you for considering and being a part of my
                    educational journey. Together, we can make dreams come true.
                  </p>

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

        <GridItem w="100%" key={1} h={"100%"}>
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href={`/posts/1`}
          >
            <Flex flexDirection="column">
              <Box bgColor={"teal"} p={4} pl={6} h="50%">
                <VStack align="start" spacing={2} color="white">
                  <Flex mb={4}>
                    <Tag size={"sm"}> Science</Tag>
                    <Tag ml={1} size={"sm"}>
                      {" "}
                      Mathematics
                    </Tag>
                    <Tag ml={1} size={"sm"}>
                      School Fees
                    </Tag>
                  </Flex>

                  <Heading
                    color={"white"}
                    as={"h1"}
                    fontSize="large"
                    fontWeight="bold"
                  >
                    Please I need help to pay for my first semester school fees
                  </Heading>
                </VStack>
              </Box>
              <Box width="100%" py={2} pl={6} bg={"white"} h="50%">
                <VStack align="start" spacing={2}>
                  <Text fontSize="sm" color={"gray.500"}>
                    Published 3 months ago
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
                        name={`Ajibade Emmanuel`}
                        src="https://bit.ly/dan-abramov"
                        size="md"
                      />
                      <Text fontSize={"13px"}>Ajibade Emmanuel</Text>
                    </HStack>
                  </HStack>
                  <Divider color={"gray"} fontWeight={"md"} />
                  <p className="line-clamp-3 text-sm">
                    Dear friends, alumni and community, I am reaching out with a
                    humble request for your support. I am in need of financial
                    assistance to fund my first semester school fees at the
                    university of Lagos . Every contribution, no matter the
                    size, will make a significant impact on my journey. Your
                    generosity will not only help me achieve my educational
                    goals but also empower me to give back to the community in
                    the future. Thank you for considering and being a part of my
                    educational journey. Together, we can make dreams come true.
                  </p>

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
        {/* ))} */}
      </Grid>
    </div>
  );
}
