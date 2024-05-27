import { useAuth } from "@/api/hooks/useAuth";
import { iPostsProps } from "@/types/Posts";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Header, { Jacques } from "../components/Navbar";
import NeedHelp from "../components/NeedHelp";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

export default function LandingPage() {
  const { client } = useAuth();
  const [posts, setPosts] = useState<iPostsProps[]>([]);
  const [error, setError] = useState(null);
  const [savedPostLength, setSavedPostLength] = useState();
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const {
    data: postsData,
    isLoading: isUserLoading,
    isError: getGroupError,
  } = useQuery({
    queryKey: ["allposts"],
    queryFn: async () => {
      return client
        .get(`posts`, {})
        .then((response) => {
          setPosts(response.data);
          return response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
  });

  return (
    <Box pt={6}>
      <Header />
      <Box px={{ md: 16, base: 6 }} mt={10}>
        <Heading fontSize={"40px"} mb={20} mt={10}>
          <Center className={Jacques.className}>AAS - Assist A Student</Center>
        </Heading>

        <Heading>Hello,</Heading>
        <Text color={"rgba(39, 39, 39, 0.7)"} my={4}>
          What do you want to do today?
        </Text>
        {/* <Stack spacing={4} mt={16} w={"70%"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search using keywords: school fees, science, art e.t.c"
            />
          </InputGroup>
        </Stack> */}

        <Flex justifyContent={"flex-start"} mt={4}>
          <Button
            fontWeight={"medium"}
            fontSize={"16px"}
            py={5}
            px={5}
            colorScheme="teal"
            variant={activeTab === "tab1" ? "solid" : "outline"}
            onClick={() => handleTabClick("tab1")}
            color={activeTab === "tab1" ? "white" : "teal"}
            borderRadius="full"
            size="sm"
            bg={activeTab === "tab1" ? "teal" : ""}
          >
            Request Help
          </Button>
          <Button
            fontWeight={"medium"}
            fontSize={"16px"}
            ml={4}
            py={5}
            px={5}
            colorScheme="teal"
            variant={activeTab === "tab2" ? "solid" : "outline"}
            onClick={() => handleTabClick("tab2")}
            color={activeTab === "tab2" ? "white" : "teal"}
            borderRadius="full"
            size="sm"
            bg={activeTab === "tab2" ? "teal" : ""}
          >
            Provide help
          </Button>
          <Button
            fontWeight={"medium"}
            fontSize={"16px"}
            ml={4}
            py={5}
            px={5}
            colorScheme="black"
            variant={activeTab === "tab3" ? "solid" : "outline"}
            onClick={() => handleTabClick("tab3")}
            color={activeTab === "tab3" ? "white" : "black"}
            borderRadius="full"
            size="sm"
            bg={activeTab === "tab3" ? "teal" : ""}
          >
            View saved
          </Button>
        </Flex>
        <Stack spacing={4} mt={8} mb={8} w={"70%"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" className="py-6">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              className="py-6"
              type="text"
              placeholder="Search using keywords: school fees, science, art e.t.c"
            />
          </InputGroup>
        </Stack>

        {/* <Grid templateColumns={{ base: "1fr", md: "80% 30%" }} gap={4}> */}
        <Box>
          {activeTab === "tab1" && (
            <Box>
              <NeedHelp posts={posts} />
            </Box>
          )}

          {activeTab === "tab2" && <Box>Helped individuals</Box>}
          {activeTab === "tab3" && <Box>Saved</Box>}

          {activeTab === "tab2" && (
            <div>
              <p>Content for Transaction List.</p>
            </div>
          )}
        </Box>
        {/* <Box>
            <Sidebar />
          </Box> */}
        {/* </Grid> */}
      </Box>
    </Box>
  );
}
