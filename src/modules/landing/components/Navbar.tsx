"use client";

import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Jacques_Francois_Shadow } from "next/font/google";
import { usePathname } from "next/navigation";
// import SettingsIcon from "../../../public/Icon.svg";
// import BellIcon from "../../../public/bell.svg";
interface Props {
  children: React.ReactNode;
}

export const Jacques = Jacques_Francois_Shadow({
  subsets: ["latin"],
  weight: "400",
});
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
  const pathName = usePathname();
  const isNeedHelp = pathName === "/need-help";
  const authenticated = pathName.includes("/posts/");

  return (
    <Box width={"auto"}>
      <Box px={{ md: 20, base: 6 }}>
        <Flex
          // pt={12}
          // mt={{ md: "unset", base: 12 }}
          pb={2}
          h={14}
          // alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              textDecoration={"none"}
              href="/"
            >
              <Text fontSize={"35px"} className={Jacques.className}>
                AAS
              </Text>
            </Link>
          </Box>

          <HStack
            spacing={10}
            fontSize={"16px"}
            alignItems={"center"}
            color={"#9B9999"}
          >
            <Box display={{ md: "block", base: "none" }}>
              <Link href="/how-it-works">How it works</Link>
            </Box>
            <Box display={{ md: "block", base: "none" }}>
              <Link href="/help">Help</Link>
            </Box>
            <Box display={{ md: "block", base: "none" }}>
              <Link href="/need-help">For Student</Link>
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            {authenticated ? (
              <Avatar
                height="50px"
                width="50px"
                name={`Ajibade Emmanuel`}
                src="https://bit.ly/dan-abramov"
                size="md"
              />
            ) : (
              <Button
                display={isNeedHelp ? "none" : ""}
                fontWeight={"medium"}
                color={"white"}
                bg={"#008080"}
                w="99px" // Width
                h="35spx" // Height
                borderRadius="30px" // Border radius
                padding="10px 20px" // Padding
                gap="10px" // Gap between elements (for button group)
              >
                Sign up
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
