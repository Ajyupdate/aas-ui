"use client";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import BellIcon from "../../../../public/bell.svg";

interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width={"auto"}>
      <Box>
        <Flex
          mt={{ md: "unset", base: 12 }}
          pb={2}
          h={14}
          // alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                textDecoration={"none"}
                href="/"
              >
                <Heading
                  // color={"white"}
                  fontWeight={{ base: 700, md: 700 }}
                  fontSize={"24px"}
                >
                  Finch
                </Heading>
              </Link>
            </Box>
            <Box display={{ md: "block", base: "none" }}>
              <Link>Help</Link>
            </Box>
            <Box display={{ md: "block", base: "none" }}>
              <Link href="/need-help">Need Help?</Link>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Box mr={6} display={{ md: "block", base: "none" }}>
              <Image src={SettingsIcon} alt="settings icon" />
            </Box> */}

            <Box mr={6} display={{ md: "block", base: "none" }}>
              <Image src={BellIcon} alt="bell icon" />
            </Box>

            <Menu>
              <MenuButton
                display={{ md: "block", base: "none" }}
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>

            <Box>
              <VStack>
                <Box>
                  <IconButton
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                  />
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
