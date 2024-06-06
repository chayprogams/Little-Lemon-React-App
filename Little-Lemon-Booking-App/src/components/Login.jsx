import { useState } from "react";
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
  FormHelperText,
  InputRightElement,
  FormErrorMessage,
  
} from "@chakra-ui/react";
import { EmailIcon, LockIcon,ViewIcon,ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();
  const handleShowClick = () => setShowPassword(!showPassword);
const formik = useFormik({
initialValues:{
 email:'',
 password:''
},
validationSchema:yup.object({
    email:yup.string().required('Required'),
    password:yup.string().required('Required')
}),
onSubmit: () => {
    navigate('/');
  },
})
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
        <Heading color="white" mb={6}>Login</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={formik.handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius="lg"
            >
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <EmailIcon />
                  </InputLeftElement>
                  <Input type="email" placeholder="Email address" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                </InputGroup>
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.password && !!formik.errors.password}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <LockIcon />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange}
                  />
                   
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link color="teal.500">Forgot password?</Link>
                </FormHelperText>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <Button
                borderRadius="lg"
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box color="white" mt={6}>
        New to us?{" "}
        <Link color="teal.200" to={'/signup'}>
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
