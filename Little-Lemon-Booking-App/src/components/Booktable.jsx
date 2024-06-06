import { useFormik } from "formik";
import Navbar from './Navbar';
import Footer from "./Footer";
import * as yup from 'yup';
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

const Booktable = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      guests: "",
      date: "",
      time: "",
      occassions:""
    },
    validationSchema: yup.object({
      name: yup.string().required('Required'),
      guests: yup.number().required('Required').min(1, 'Must be at least 1 guest'),
      date: yup.date().required('Required'),
      time: yup.string().required('Required'),  // `yup.time` doesn't exist, use `yup.string`
      occassions:yup.string().required('Required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <>
      <Navbar />
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w="full" maxW="md">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={formik.touched.name && !!formik.errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  variant="filled"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.guests && !!formik.errors.guests}>
                <FormLabel htmlFor="guests">Number Of Guests</FormLabel>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  variant="filled"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.guests}
                />
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.date && !!formik.errors.date}>
                <FormLabel htmlFor="date">Reservation Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  variant="filled"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.time && !!formik.errors.time}>
                <FormLabel htmlFor="time">Reservation Time</FormLabel>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  variant="filled"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                />
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.occassions && !!formik.errors.occassions}>
  <FormLabel htmlFor="occassions">Occasion</FormLabel>
  <RadioGroup
    id="occassions"
    name="occassions"
    onChange={(value) => formik.setFieldValue('occassions', value)}
    onBlur={formik.handleBlur}
    value={formik.values.occassions}
  >
    <VStack align="flex-start">
      <Radio value="Birthday">Birthday</Radio>
      <Radio value="Anniversary">Anniversary</Radio>
    </VStack>
  </RadioGroup>
  <FormErrorMessage>{formik.errors.occassions}</FormErrorMessage>
</FormControl>

              <Button type="submit" colorScheme="purple" width="full">
                Reserve
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default Booktable;
