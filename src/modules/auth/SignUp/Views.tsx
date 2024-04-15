// "use client";
// import {
//   Box,
//   Center,
//   Flex,
//   Heading,
//   Input,
//   Link,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
// });

// export default function SignUp() {
//   const handleSubmit = (values: any, actions: any) => {
//     console.log(values);
//     actions.setSubmitting(false);
//   };
//   return (
//     <div className="white md:p-20">
//       <Box mt={12}>
//         <Center>
//           <Heading fontSize={"large"}>Create Account as Sponsor</Heading>
//         </Center>
//       </Box>

//       <Flex
//         mt={8}
//         // minH={{ md: "100vh", base: "100vh" }}
//         align={"center"}
//         justify={"center"}
//         // bg="blue.500"
//         // bg="gray.50"
//       >
//         <Stack
//           spacing={8}
//           mx={"auto"}
//           w={{ md: "80%", base: "unset" }}
//           // py={12}
//           // px={6}
//         >
//           <Box borderRadius={"lg"} bg={"white"} p={4} color={"black"}>
//             <Center>
//               {" "}
//               <Heading fontSize="xl" fontWeight="medium" mt={6} mb={8}>
//                 Sign Up
//               </Heading>
//             </Center>
//             <Formik
//               initialValues={{ email: "", password: "" }}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ isSubmitting }) => (
//                 <Form>
//                   <Box marginBottom="2" px={{ base: 2, md: 4 }}>
//                     <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
//                       Email
//                     </Heading>
//                     <Field
//                       // variant={"filled"}
//                       as={Input}
//                       type="text"
//                       name="email"
//                     />
//                     <Box mt={2} color="red.500" fontSize="sm">
//                       <ErrorMessage name="email" />
//                     </Box>
//                   </Box>

//                   <Box px={{ base: 2, md: 4 }}>
//                     <button
//                       onClick={() => handleSubmit}
//                       type="submit"
//                       className={` mt-4 bg-blue-500 w-full hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded `}
//                       // disabled={isSubmitting}
//                     >
//                       {"Sign up"}
//                     </button>
//                   </Box>

//                   <Stack mt={2} fontSize={"small"}>
//                     <Text align={"center"}>
//                       Already have an account?{" "}
//                       <Link
//                         // fontWeight={"bold"}
//                         href="../auth/sign-up"
//                         color={"blue.500"}
//                       >
//                         Sign in
//                       </Link>
//                     </Text>
//                     {/* {!params && (
//                     <Box>
//                       <Flex justify={"center"} align={"center"}>
//                         OR
//                       </Flex>

//                       <Text align={"center"}>
//                         <Link
//                           // fontWeight={"bold"}
//                           href="../auth/sign-in?query=admin"
//                           color={"blue.500"}
//                         >
//                           Forgotten Password?
//                         </Link>
//                       </Text>
//                     </Box>
//                   )} */}
//                   </Stack>
//                 </Form>
//               )}
//             </Formik>
//           </Box>
//         </Stack>
//       </Flex>
//     </div>
//   );
// }

import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react"; // Add useState to manage form state
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dateOfBirth: Yup.date(),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string(),
  phoneNumber: Yup.string().required("Phone Number is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  alumni: Yup.string(),
});

export default function SignUp() {
  const [genderOptions] = useState(["Male", "Female", "Other"]); // Gender options
  const [alumniOptions] = useState(["Yes", "No"]); // Alumni options

  const handleSubmit = (values: any, actions: { setSubmitting: (arg0: boolean) => void; }) => {
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

      <Flex mt={8} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} w={{ md: "80%", base: "unset" }}>
          <Box borderRadius={"lg"} bg={"white"} p={4} color={"black"}>
            <Center>
              <Heading fontSize="xl" fontWeight="medium" mt={6} mb={8}>
                Sign Up
              </Heading>
            </Center>
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                gender: "",
                address: "",
                phoneNumber: "",
                username: "",
                alumni: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      First Name
                    </Heading>
                    <Field as={Input} type="text" name="firstName" />
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="firstName" />
                    </Box>
                  </Box>

                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Last Name
                    </Heading>
                    <Field as={Input} type="text" name="lastName" />
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="lastName" />
                    </Box>
                  </Box>

                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Date of Birth
                    </Heading>
                    <Field as={Input} type="date" name="dateOfBirth" />
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="dateOfBirth" />
                    </Box>
                  </Box>

                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Gender
                    </Heading>
                    <Field as={Select} name="gender">
                      {genderOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="gender" />
                    </Box>
                  </Box>

                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Address
                    </Heading>
                    <Field as={Input} type="text" name="address" />
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="address" />
                    </Box>
                  </Box>

                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Phone Number
                    </Heading>
                    <Field as={Input} type="tel" name="phoneNumber" />
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="phoneNumber" />
                    </Box>
                  </Box>

                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Username
                    </Heading>
                    <Field as={Input} type="text" name="username" />
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="username" />
                    </Box>
                  </Box>

                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Password
                    </Heading>
                    <Field as={Input} type="password" name="password" />
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="password" />
                    </Box>
                  </Box>

                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Confirm Password
                    </Heading>
                    <Field as={Input} type="password" name="confirmPassword" />
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="confirmPassword" />
                    </Box>
                  </Box>

                  <Box marginBottom="2" px={{ base: 2, md: 4 }}>
                    <Heading mb={2} fontWeight={"medium"} fontSize={"sm"}>
                      Alumni
                    </Heading>
                    <Field as={Select} name="alumni">
                      {alumniOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <Box mt={2} color="red.500" fontSize="sm">
                      <ErrorMessage name="alumni" />
                    </Box>
                  </Box>

                  <Box px={{ base: 2, md: 4 }}>
                    <button
                      type="submit"
                      className={` mt-4 bg-blue-500 w-full hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded `}
                    >
                      {"Sign up"}
                    </button>
                  </Box>

                  <Stack mt={2} fontSize={"small"}>
                    <Text align={"center"}>
                      Already have an account?{" "}
                      <Link href="../auth/sign-up" color={"blue.500"}>
                        Sign in
                      </Link>
                    </Text>
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
