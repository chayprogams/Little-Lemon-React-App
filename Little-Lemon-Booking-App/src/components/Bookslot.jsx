import { useFormik } from "formik";
import Navbar from './Navbar';
import Footer from "./Footer";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
  RadioGroup,
  Radio
} from "@chakra-ui/react";
import { fetchAPI } from './api';  // Assuming you have an api.js file where fetchAPI is defined

const BookSlot = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: "",
      guests: "",
      ocassion: ""
    },
    validationSchema: yup.object({
      date: yup.date().required('Required'),
      guests: yup.number().required('Required').min(1, 'Must be at least 1 guest'),
      ocassion: yup.string().required('Required')
    }),
    onSubmit: (values) => {
      const availableTimes = fetchAPI(new Date(values.date));
      navigate('/available-slots', { state: { availableTimes, formData: values } });
    }
  });

  return (
    <>
      <Navbar />
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w="full" maxW="md">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={formik.touched.date && !!formik.errors.date}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.guests && !!formik.errors.guests}>
                <FormLabel htmlFor="guests">Number Of Guests</FormLabel>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.guests}
                />
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.ocassion && !!formik.errors.ocassion}>
                <FormLabel htmlFor="ocassion">Ocassion</FormLabel>
                <RadioGroup
                  id="ocassion"
                  name="ocassion"
                  value={formik.values.ocassion}
                  onChange={(value) => formik.setFieldValue('ocassion', value)}
                  onBlur={formik.handleBlur}
                >
                  <Radio value="Birthday" colorScheme='red'>
                    Birthday
                  </Radio>
                  <Radio value="Anniversary" colorScheme='green' style={{ marginLeft: 15 }}>
                    Anniversary
                  </Radio>
                </RadioGroup>
                <FormErrorMessage>{formik.errors.ocassion}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" disabled={!formik.isValid}>
                Show Available Slots
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default BookSlot;
