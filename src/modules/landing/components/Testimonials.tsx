import { Avatar, Box, Grid, GridItem, HStack, Text } from "@chakra-ui/react";

const TestimonialData = [
  {
    id: 1,
    name: "Ade Aregbesola",
    text: "Deeply grateful to this incredible community and the amazing platform for the overwhelming support in funding my school fees. Your generosity has not only lifted a financial burden but has ignited a flame of hope and determination within me. Thank you for believing in the power of education and making a lasting impact on my future.",
  },
  {
    id: 2,
    name: "Chidi Emefia",
    text: "Overflowing gratitude to our wonderful community and the incredible platform for the generous support in funding my lab manuals. Your contributions are instrumental in keeping me in school and getting good grades.",
  },
  {
    id: 3,
    name: "Ade Aregbesola",
    text: "Deeply grateful to this incredible community and the amazing platform for the overwhelming support in funding my school fees. Your generosity has not only lifted a financial burden but has ignited a flame of hope and determination within me. Thank you for believing in the power of education and making a lasting impact on my future.",
  },
  {
    id: 4,
    name: "Chidi Emefia",
    text: "Overflowing gratitude to our wonderful community and the incredible platform for the generous support in funding my lab manuals. Your contributions are instrumental in keeping me in school and getting good grades.",
  },
];
export default function Testimonials() {
  return (
    <Box>
      <Grid
        templateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
        mr={{ md: "10%", base: "unset" }}
        ml={{ md: "10%", base: "unset" }}
        gap={12}
      >
        {TestimonialData.map((testimonial, index) => (
          <GridItem
            p={8}
            bg={"#F1F1F1"}
            w="100%"
            key={index}
            h="100%"
            rounded="xl"
          >
            <HStack spacing={4} align="center">
              <Avatar
                height="50px"
                width="50px"
                name={testimonial.name}
                src="https://bit.ly/dan-abramov"
                size="md"
              />
              <Text fontSize="18px" fontWeight={400}>
                {testimonial.name}
              </Text>
            </HStack>

            <Text className="leading-7">{testimonial.text}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
