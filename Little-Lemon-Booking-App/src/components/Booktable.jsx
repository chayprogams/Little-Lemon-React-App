import { useFormik } from "formik";
import Navbar from './Navbar'
import Footer from "./Footer";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
const Booktable = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          guests: "",
          date: "",
          time:""
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        }
      });
  return (
    <>
    <Navbar/>
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="guests">Number Of Guests</FormLabel>
              <Input
                id="guests"
                name="guests"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.guests}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="date">Reservation Date</FormLabel>
              <Input
                id="date"
                name="date"
                type="date"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="time">Reservation Time</FormLabel>
              <Input
                id="time"
                name="time"
                type="time"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.time}
              />
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Reserve
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
    <Footer/>
    </>
  )
}

export default Booktable
