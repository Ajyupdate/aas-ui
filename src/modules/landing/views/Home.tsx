import { iPostsProps } from "@/types/Posts";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { Jacques_Francois_Shadow } from "next/font/google";
import { useEffect, useState } from "react";
import Header from "../components/Navbar";
import NeedHelp from "../components/NeedHelp";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

const Jacques = Jacques_Francois_Shadow({ subsets: ["latin"], weight: "400" });

export default function LandingPage() {
  const [posts, setPosts] = useState<iPostsProps[]>([]);
  const [error, setError] = useState(null);
  const [savedPostLength, setSavedPostLength] = useState();
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/posts`);
        console.log(response.data);
        setPosts(response.data);

        console.log(savedPostLength);
      } catch (error) {
        // setError(error.message);
      }
    };

    fetchPosts();
  }, []); //

  return (
    <Box pt={6}>
      <Header />
      <Box px={{ md: 20, base: 6 }} mt={10}>
        <Flex justify={"center"}>
          <Text fontSize={"35px"} mb={12} mt={4} className={Jacques.className}>
            AAS - Assist A Student
          </Text>
        </Flex>

        <Stack>
          <Heading fontWeight={"400"}>Hello,</Heading>
          <Text color={"rgba(39, 39, 39, 0.7)"}>
            What do you want to do today?
          </Text>
        </Stack>

        <Flex justifyContent={"flex-start"} my={4}>
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
