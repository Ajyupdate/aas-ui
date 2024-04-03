"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function SignUp() {
  const handleSubmit = (values: any, actions: any) => {
    console.log(values);
    actions.setSubmitting(false);
  };
  return (
    <div className="white md:p-20">
      <Box mt={12}>
        <Center>
          <Heading fontSize={"large"}>Create Account as Sponsor</Heading>
        </Center>
      </Box>

      <Flex
        mt={8}
        // minH={{ md: "100vh", base: "100vh" }}
        align={"center"}
        justify={"center"}
        // bg="blue.500"
        // bg="gray.50"
      >
        <Stack
          spacing={8}
          mx={"auto"}
          w={{ md: "80%", base: "unset" }}
          // py={12}
          // px={6}
        >
          <Box borderRadius={"lg"} bg={"white"} p={4} color={"black"}>
            <Center>
              {" "}
              <Heading fontSize="xl" fontWeight="medium" mt={6} mb={8}>
                Sign Up
              </Heading>
            </Center>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Email
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

                  <Box px={{ base: 2, md: 4 }}>
                    <button
                      onClick={() => handleSubmit}
                      type="submit"
                      className={` mt-4 bg-blue-500 w-full hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded `}
                      // disabled={isSubmitting}
                    >
                      {"Sign up"}
                    </button>
                  </Box>

                  <Stack mt={2} fontSize={"small"}>
                    <Text align={"center"}>
                      Already have an account?{" "}
                      <Link
                        // fontWeight={"bold"}
                        href="../auth/sign-up"
                        color={"blue.500"}
                      >
                        Sign in
                      </Link>
                    </Text>
                    {/* {!params && (
                    <Box>
                      <Flex justify={"center"} align={"center"}>
                        OR
                      </Flex>

                      <Text align={"center"}>
                        <Link
                          // fontWeight={"bold"}
                          href="../auth/sign-in?query=admin"
                          color={"blue.500"}
                        >
                          Forgotten Password?
                        </Link>
                      </Text>
                    </Box>
                  )} */}
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
