import { Jacques } from "@/modules/landing/components/Navbar";
import { Box, Flex, Text } from "@chakra-ui/react";

export interface AuthLayoutProps {
  SidebarHeader: React.ReactNode;
  sidebarText: React.ReactNode;
  children: React.ReactNode;
}
export default function AuthLayout({
  SidebarHeader,
  sidebarText,
  children,
}: AuthLayoutProps) {
  return (
    <div className="h-[100vh]">
      <Flex height={"100vh"}>
        <Box height={"100vh"} pl={"5%"} width={"30%"}>
          <Text mt={"8%"} fontSize={"35px"} className={Jacques.className}>
            AAS{" "}
          </Text>
          <Box mt={"15%"}>{SidebarHeader}</Box>
          <Box mt={"5%"}>{sidebarText}</Box>
        </Box>

        <Box bg={"white"} width={"70%"}>
          {children}
          {/* <Flex justify={"flex-end"}>Don&apos;t have an account yet?</Flex> */}
        </Box>
      </Flex>
    </div>
  );
}
