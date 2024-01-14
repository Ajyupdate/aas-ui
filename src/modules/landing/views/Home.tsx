import { iPostsProps } from "@/types/Posts";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Navbar";
import NeedHelp from "../components/NeedHelp";
import Sidebar from "../components/Sidebar";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;
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
    <Box>
      <Header />
      <Box px={{ md: 16, base: 6 }} mt={10}>
        <Heading fontSize={"40px"}>Hi Ajibade</Heading>
        <Stack spacing={4} mt={16} w={"70%"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search using keywords: school fees, science, art e.t.c"
            />
          </InputGroup>
        </Stack>

        <Flex justifyContent={"flex-start"} my={4}>
          <Button
            onClick={() => handleTabClick("tab1")}
            color={"black"}
            borderRadius="full"
            size="sm"
            bg="white"
          >
            Need Help
          </Button>
          <Button
            ml={4}
            onClick={() => handleTabClick("tab2")}
            color={"black"}
            borderRadius="full"
            size="sm"
            bg="white"
          >
            Helped
          </Button>
          <Button
            ml={4}
            onClick={() => handleTabClick("tab3")}
            color={"black"}
            borderRadius="full"
            size="sm"
            bg="white"
          >
            Saved
          </Button>
        </Flex>
        <Grid templateColumns={{ base: "1fr", md: "70% 30%" }} gap={4}>
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
          <Box>
            <Sidebar />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
