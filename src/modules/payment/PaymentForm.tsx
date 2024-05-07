import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

interface PaymentFormProps {
  amount: string | null;
}
const PaymentForm = ({ amount }: PaymentFormProps) => {
  const validationSchema = yup.object().shape({
    email: yup.string().required("email is required"),
    amount: yup.number().required("amount is required"),
  });

  const handlePayment = async (values: any) => {
    const email = values.email;
    const amount = values.amount;

    try {
      const response = await axios.post(`${API_ENDPOINT}/initialize-payment`, {
        email,
        amount,
      });

      // Redirect the user to the payment page
      window.location.href = response.data.data.authorization_url;
    } catch (error) {
      console.error("Error initializing payment:", error);
    }
  };

  return (
    <Flex
      minH={{ md: "100vh", base: "100vh" }}
      align={"center"}
      justify={"center"}
      //  bg="blue.500"
      // bg="gray.50"
    >
      <Stack
        spacing={8}
        mx={"auto"}
        w={{ md: "40%", base: "unset" }}
        py={12}
        px={6}
      >
        <Box borderRadius={"lg"} bg={"white"} p={4} color={"black"}>
          <Formik
            initialValues={{ email: "", amount: amount }}
            validationSchema={validationSchema}
            onSubmit={handlePayment}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                  <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                    Enter email to get your receipt
                  </Heading>
                  <Field
                    // variant={"filled"}
                    as={Input}
                    type="text"
                    name="email"
                  />
                  <Box mt={2} color="red.500" fontSize="sm">
                    <ErrorMessage name="email" />
                  </Box>
                </Box>
                <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                  <Heading mt={4} mb={2} fontWeight={"medium"} fontSize={"sm"}>
                    Amount in Naira
                  </Heading>
                  <Field
                    // variant={"filled"}
                    as={Input}
                    type="number"
                    name="amount"
                  />
                  <Box mt={2} color="red.500" fontSize="sm">
                    <ErrorMessage name="amount" />
                  </Box>
                </Box>
                <Box px={{ base: 2, md: 4 }}>
                  <Button
                    bg={"teal.500"}
                    type="submit"
                    width="full"
                    className={`mt-4 bg-teal-500 w-full hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded`}
                    // disabled={isSubmitting}
                  >
                    Proceed
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
};

export default PaymentForm;
