import Header from "@/modules/landing/components/Navbar";
import { iPostsProps } from "@/types/Posts";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Spinner,
  Stack,
  Textarea,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import NeedHelpImage from "../../../../public/need-help.jpg";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;
// interface FormData {
//   title: string;
//   content: string;
//   school: string;
//   faculty: string;
//   department: string;
//   category: string;
//   attachment: File | null;
// }

const initialValues: iPostsProps = {
  student_id: "",
  title: "",
  content: "",
  school: "",
  faculty: "",
  department: "",
  category: "",
  attachment_url: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(60, "Title must be at most 60 characters"),
  content: Yup.string()
    .min(50, "Content must be at least 50 characters")
    .required("content are required"),
  school: Yup.string().required("School is required"),
  faculty: Yup.string().required("Faculty is required"),
  department: Yup.string().required("Department is required"),
  category: Yup.string().required("Category is required"),
  // attachment: Yup.mixed().required('Attachment is required'),
});

export default function NeedHelp() {
  const toast = useToast();
  const router = useRouter();
  const handleSubmit = (values: iPostsProps) => {
    console.log(values);
    const postFormValues = {
      title: values.title,
      content: values.content,
      category: values.category,
      attachment_url: values.attachment_url,
      student_id: "41e960a6-abf7-446c-b3ff-99711b585537",
    };

    axios
      .post(`${API_ENDPOINT}/posts/`, postFormValues)
      .then((response) => {
        // setLoading(false);
        // window.location.reload();
        toast({
          title: "Success.",
          description: "Post added successfully.",
          status: "success",
          duration: 1400,
          isClosable: true,
        });
        router.push("/");
      })
      .catch((error) => {
        // setLoading(false);

        toast({
          title: "Error.",
          description:
            "Error Adding Post. please check your internet connection and try again",
          status: "error",
          duration: 900,
          isClosable: true,
        });
      });
  };

  return (
    <Box>
      <Header />

      <div
        style={{
          // use relative position for the parent div
          position: "relative",
          width: "100vw",
          height: "60vh",
        }}
      >
        <Image src={NeedHelpImage} fill={true} alt={"Background Image"} />

        {/* The child element */}
        <div
          style={{
            // use absolute position for the child element
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // use higher zIndex than the image
            zIndex: 4,
            //   background: "yellow",
            //   padding: "30px",
            //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              color: "black",
            }}
          >
            Every One Needs Help
          </h1>
        </div>
      </div>

      <Flex minH={"100vh"} mt={4} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} mt={4} maxW={"lg"} py={12}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"none"}
            shadow={"none"}
            p={8}
            w={{ md: "500px", base: "350px" }}
          >
            <Stack spacing={4}>
              <Heading as={"h3"}>What do you need help for?</Heading>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="w-full ">
                    <VStack spacing={{ md: 2, base: 8 }} align="flex-start">
                      <Field name="title">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            isInvalid={
                              !!(form.errors.title && form.touched.title)
                            }
                          >
                            <FormLabel htmlFor="title">Title</FormLabel>
                            <Input
                              variant={"filled"}
                              {...field}
                              id="title"
                              placeholder="example: Please I need help to pay my first semester school fees"
                            />

                            <Box mt={2} color="red.500" fontSize="sm">
                              <ErrorMessage name="title" />
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="content">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            mt={4}
                            isInvalid={
                              !!(form.errors.content && form.touched.content)
                            }
                          >
                            <FormLabel htmlFor="content">content</FormLabel>
                            <Textarea
                              variant={"filled"}
                              {...field}
                              id="content"
                              placeholder="Enter content"
                            />
                            <Box mt={2} color="red.500" fontSize="sm">
                              <ErrorMessage name="content" />
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="school">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            mt={4}
                            isInvalid={
                              !!(form.errors.school && form.touched.school)
                            }
                          >
                            <FormLabel htmlFor="school">School</FormLabel>
                            <Input
                              variant={"filled"}
                              {...field}
                              id="school"
                              placeholder="Enter school"
                            />
                            <Box mt={2} color="red.500" fontSize="sm">
                              <ErrorMessage name="school" />
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="faculty">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            mt={4}
                            isInvalid={
                              !!(form.errors.faculty && form.touched.faculty)
                            }
                          >
                            <FormLabel htmlFor="faculty">Faculty</FormLabel>
                            <Input
                              variant={"filled"}
                              {...field}
                              id="faculty"
                              placeholder="Enter faculty"
                            />
                            <Box mt={2} color="red.500" fontSize="sm">
                              <ErrorMessage name="faculty" />
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="department">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            mt={4}
                            isInvalid={
                              !!(
                                form.errors.department &&
                                form.touched.department
                              )
                            }
                          >
                            <FormLabel htmlFor="department">
                              Department
                            </FormLabel>
                            <Input
                              variant={"filled"}
                              {...field}
                              id="department"
                              placeholder="Enter department"
                            />
                            <Box mt={2} color="red.500" fontSize="sm">
                              <ErrorMessage name="department" />
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="category">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            mt={4}
                            isInvalid={
                              !!(form.errors.category && form.touched.category)
                            }
                          >
                            <FormLabel htmlFor="category">Category</FormLabel>
                            <Select
                              variant={"filled"}
                              {...field}
                              id="category"
                              placeholder="Select category"
                            >
                              <option value="fees">Fees</option>
                              <option value="lab">Lab</option>
                            </Select>
                            <Box mt={2} color="red.500" fontSize="sm">
                              <ErrorMessage name="category" />
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="attachment">
                        {({ form, field }: FieldProps) => (
                          <FormControl
                            mt={4}
                            isInvalid={
                              !!(
                                form.errors.attachment &&
                                form.touched.attachment
                              )
                            }
                          >
                            <FormLabel htmlFor="attachment">
                              Attachment
                            </FormLabel>
                            <Input
                              variant={"filled"}
                              {...field}
                              id="attachment"
                              type="file"
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                form.setFieldValue(
                                  "attachment",
                                  event.currentTarget.files
                                    ? event.currentTarget.files[0]
                                    : null
                                );
                              }}
                            />
                            <Box mt={2} color="red.500" fontSize="sm">
                              <ErrorMessage name="attachement" />
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Button
                        mt={4}
                        colorScheme="teal"
                        type="submit"
                        isLoading={isSubmitting}
                      >
                        {isSubmitting ? (
                          <Spinner size="sm" color="white" />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </VStack>
                  </Form>
                )}
              </Formik>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
