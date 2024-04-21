import Banner from "@/components/Banner";
import { Box, Grid } from "@chakra-ui/react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid templateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}>
      <Box className="border">
        <Banner />
      </Box>

      <Box>{children}</Box>
    </Grid>
  );
}
