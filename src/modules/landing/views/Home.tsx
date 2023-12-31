import { Box, Grid, Heading, Input, InputGroup, InputLeftElement, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Header from "../components/Navbar";
import { SearchIcon } from "@chakra-ui/icons";
import NeedHelp from "../components/NeedHelp";
export default function LandingPage(){
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
                                
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                <NeedHelp/>
                                </TabPanel>
                                <TabPanel>
                                <p>two!</p>
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