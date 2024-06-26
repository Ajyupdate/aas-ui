import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import localFont from "next/font/local";
import TanstackProvider from "../../providers/TanstackProvider";
import "./globals.css";
import { Providers } from "./provider";
const myFont = localFont({
  src: "../../public/fonts/Sailec Medium.ttf",
  display: "swap",
});
const inter = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Providers>
          <TanstackProvider>
            <Box bg={"#F7FAFC"}>
              {children}
              {/* <Footer /> */}
            </Box>
          </TanstackProvider>
        </Providers>
      </body>
    </html>
  );
}
