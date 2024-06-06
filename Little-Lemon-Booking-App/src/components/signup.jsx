import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  FormControl,
  InputRightElement,
  FormErrorMessage,
  useToast
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { useFormik } from "formik";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
const toast = useToast();
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleConfirmClick = () => setShowConfirmPassword(!showConfirmPassword);

  const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      showpassword: ''
    },
    validationSchema: yup.object({
      firstname: yup.string().required('Required'),
      lastname: yup.string().required('Required'),
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup.string()
        .required('Required')
        .min(8, "Password must have at least 8 characters")
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
      showpassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Required')
    }),
    onSubmit: () => {
      toast({
        title: "Account created.",
        description: "Your account has been created successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate('/login');
      }, 5000); // 5000ms is the duration of the toast
    }
    
  });

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="white" mb={6}>Sign Up</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={formik.handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius="lg"
            >
              <FormControl isInvalid={formik.touched.firstname && formik.errors.firstname}>
                <InputGroup>
                  <Input 
                    type="text" 
                    placeholder="First Name" 
                    name="firstname" 
                    id="firstname" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                  />
                </InputGroup>
                <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.lastname && formik.errors.lastname}>
                <InputGroup>
                  <Input 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastname" 
                    id="lastname" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                  />
                </InputGroup>
                <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <EmailIcon />
                  </InputLeftElement>
                  <Input 
                    type="email" 
                    placeholder="Email address" 
                    name="email" 
                    id="email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </InputGroup>
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.password && formik.errors.password}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <LockIcon />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password" 
                    name="password" 
                    id="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.showpassword && formik.errors.showpassword}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <LockIcon />
                  </InputLeftElement>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password" 
                    name="showpassword" 
                    id="showpassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.showpassword}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleConfirmClick}>
                      {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.showpassword}</FormErrorMessage>
              </FormControl>
              <Button
                borderRadius="lg"
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box color="white" mt={6}>
        Already a member?{" "}
        <Link color="teal.200" to={'/Login'}>
          Login
        </Link>
      </Box>
    </Flex>
  );
};

export default SignUp;
