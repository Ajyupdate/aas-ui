export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>{children}</div>
    // <Grid templateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}>
    //   <Box className="border">
    //     <Banner />
    //   </Box>

    //   <Box>{children}</Box>
    // </Grid>
  );
}
// Aang escaping from zujo 49:
