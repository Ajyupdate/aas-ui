import AuthLayout from "@/components/AuthLayout";
import {
  Box,
  Flex,
  Heading,
  Input,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const SidebarHeader = (
  <Box mt={"15%"}>
    <Text fontSize={"18px"} color={"#9B9999"}>
      Welcome
    </Text>
  </Box>
);
const sidebarText = (
  <Box mt={"5%"}>
    <Heading fontWeight={400} color={"#121212"} fontSize={"28px"}>
      Sign in to Finch
    </Heading>
  </Box>
);
export default function SignIn() {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    console.log(values);
  };
  return (
    <AuthLayout sidebarText={sidebarText} SidebarHeader={SidebarHeader}>
      <Box mt={"20%"} ml={"7.5%"} mr={"20%"}>
        <Flex justify={"flex-end"} fontWeight={"16px"}>
          <span className="text-[#9B9999]">
            Don&apos;t have an account yet?{" "}
          </span>

          <span className="text-teal-700"> Sign up</span>
        </Flex>

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Heading mb={2} fontWeight={"medium"} fontSize={"md"}>
                Your account details
              </Heading>
              <Box marginBottom="2">
                <Field
                  placeholder="Email Address"
                  // variant={"filled"}
                  height="55px"
                  as={Input}
                  type="text"
                  name="username"
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="username" />
                </Box>
              </Box>
              <Box marginBottom="2">
                {/* <Heading mt={4} mb={2} fontWeight={"medium"} fontSize={"md"}>
                  Password
                </Heading> */}
                <Field
                  placeholder="password"
                  // variant={"filled"}
                  height="55px"
                  as={Input}
                  type="password"
                  name="password"
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="password" />
                </Box>
              </Box>
              <Stack>
                <Text align={"left"} color={"#9B9999"} fontWeight={"16px"}>
                  Forgot your password?{" "}
                </Text>
              </Stack>
              <Flex justify={"center"}>
                <button
                  type="submit"
                  className={`mt-4 bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : "Login"}
                </button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthLayout>
  );
}
