import { Box, Grid, Heading, Input, InputGroup, InputLeftElement, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Header from "../components/Navbar";
import { SearchIcon } from "@chakra-ui/icons";
import NeedHelp from "../components/NeedHelp";
import { useState, useEffect } from "react";
import { iPostsProps } from "@/types/Posts";
import axios from "axios";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL
export default function LandingPage(){
    const [posts, setPosts] = useState<iPostsProps[]>([])
    const [error, setError] = useState(null);
    const [savedPostLength, setSavedPostLength] = useState()

    

    useEffect(() => {
        
        const fetchPosts = async () => {
          try {
            const response = await axios.get(`${API_ENDPOINT}/posts`); 
            console.log(response.data)
            setPosts(response.data);
        
            console.log(savedPostLength)
          } catch (error) {
            // setError(error.message);
          }
        };
    
        fetchPosts();
      }, []); // 

 
    return(
        <Box>
            <Header/>
            <Box px={{ md: 16, base: 6 }} mt={10}>
                <Grid templateColumns={{ base: "1fr", md: "70% 30%" }} gap={4}>
                    
                    <Box fontSize={'larger'}>
                        <Heading fontSize={'40px'}>Hi Ajibade</Heading>
                        <Stack spacing={4} mt={16}>

                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                <SearchIcon color='gray.300' />
                                </InputLeftElement>
                                <Input type="text" placeholder='Search using keywords: school fees, science, art e.t.c' />
                            </InputGroup>
                        </Stack>

                        <Tabs>
                            <TabList>
                                <Tab>Need Help</Tab>
                                <Tab>Helped</Tab>
                                <Tab>Saved</Tab>
                                
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <NeedHelp posts={posts} />
                                </TabPanel>
                                <TabPanel>
                                <p>two!</p>
                                </TabPanel>
                                <TabPanel>
                                <p>Saved</p>
                                </TabPanel>
                                
                            </TabPanels>
                        </Tabs>
                        
                    </Box>
                    <Box bg={'green'}>
                        hi
                    </Box>
                    
                </Grid>
            </Box>
        </Box>
    )
}