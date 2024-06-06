import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, VStack, Text, HStack, Button } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { fetchAPI } from './api';  // Assuming you have an api.js file where fetchAPI is defined
import { useToast } from "@chakra-ui/react";
const Tables = ({ seats, isSelected, isReserved, onClick }) => {
  const getChairs = () => {
    switch (seats) {
      case 2:
        return (
          <>
            <circle cx="50" cy="10" r="5" />
            <circle cx="50" cy="40" r="5" />
          </>
        );
      case 4:
        return (
          <>
            <circle cx="20" cy="10" r="5" />
            <circle cx="20" cy="40" r="5" />
            <circle cx="80" cy="10" r="5" />
            <circle cx="80" cy="40" r="5" />
          </>
        );
      case 6:
        return (
          <>
            <circle cx="20" cy="10" r="5" />
            <circle cx="20" cy="40" r="5" />
            <circle cx="50" cy="10" r="5" />
            <circle cx="50" cy="40" r="5" />
            <circle cx="80" cy="10" r="5" />
            <circle cx="80" cy="40" r="5" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.svg
      width="100"
      height="50"
      viewBox="0 0 100 50"
      whileHover={{ scale: isReserved ? 1 : 1.1 }}
      whileTap={{ scale: isReserved ? 1 : 0.9 }}
      onClick={!isReserved ? onClick : null}
      style={{
        cursor: isReserved ? 'not-allowed' : 'pointer',
        fill: isSelected ? '#D6BCFA' : isReserved ? 'gray' : '#B794F4',
      }}
    >
      <rect x="10" y="20" width="80" height="10" rx="5" />
      {getChairs()}
    </motion.svg>
  );
};

Tables.propTypes = {
  seats: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isReserved: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const DisplaySlots = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const { formData } = location.state || { formData: {} };
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [reservedSlots, setReservedSlots] = useState([]);

  useEffect(() => {
    if (formData.date) {
      const times = fetchAPI(new Date(formData.date));
      setAvailableTimes(times);
    }

    const reserved = JSON.parse(localStorage.getItem('reservedSlots')) || [];
    setReservedSlots(reserved);
  }, [formData.date]);

  const handleSelectSlot = (slotId, time) => {
    setSelectedSlot({ slotId, time });
  };

  const handleSubmit = () => {
    toast({
      title: "Success!",
      description: "Your slot has been booked successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position:'top'
    });
    setTimeout(() => {
      if (selectedSlot) {
        const updatedReservedSlots = [...reservedSlots, selectedSlot];
        setReservedSlots(updatedReservedSlots);
        localStorage.setItem('reservedSlots', JSON.stringify(updatedReservedSlots));
        navigate('/', { state: { slot: selectedSlot, formData } });
      }
    }, 5000); // 5000ms is the duration of the toast
    
  };

  const isSlotReserved = (slotId, time) => {
    return reservedSlots.some(slot => slot.slotId === slotId && slot.time === time);
  };

  const getFilteredTableData = (guests) => {
    const slots = [];
    if (guests >= 10) {
      const sixSeaters = Math.floor(guests / 6);
      const remainingGuests = guests % 6;
      for (let i = 0; i < sixSeaters; i++) {
        slots.push({ seats: 6 });
      }
      if (remainingGuests > 0) {
        slots.push({ seats: remainingGuests });
      }
    } else if (guests >= 5 && guests < 10) {
      const fourSeaters = Math.floor(guests / 4);
      const remainingGuests = guests % 4;
      for (let i = 0; i < fourSeaters; i++) {
        slots.push({ seats: 4 });
      }
      if (remainingGuests > 0) {
        slots.push({ seats: remainingGuests });
      }
    } else {
      const twoSeaters = Math.floor(guests / 2);
      const remainingGuests = guests % 2;
      for (let i = 0; i < twoSeaters; i++) {
        slots.push({ seats: 2 });
      }
      if (remainingGuests > 0) {
        slots.push({ seats: remainingGuests });
      }
    }
    return [{ id: 'slot-1', tables: slots }];
  };

  const filteredTableData = getFilteredTableData(formData.guests);

  return (
    <Flex justify="center" align="center" minH="100vh" bg="gray.100" p={6}>
      <Box bg="white" p={6} rounded="md" shadow="md" w="full" maxW="5xl">
        <VStack spacing={4} align="flex-start">
          <Text fontSize="2xl" mb={4}>Available Slots for {formData.date}</Text>
          {availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <HStack key={index} spacing={4}>
                {filteredTableData.map((slot,slotIndex) => (
                  slot.tables.map((table,tableIndex) => (
                    <motion.div
                      key={`${slot.id}-${table.seats}-${time}-${tableIndex}`}
                      initial={{ opacity: 0, x: slotIndex % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box
                        p={4}
                        bg={selectedSlot && selectedSlot.slotId === slot.id && selectedSlot.time === time ? "purple.100" : "purple.50"}
                        rounded="md"
                        shadow="md"
                        minW="100px"
                        textAlign="center"
                        cursor={isSlotReserved(slot.id, time) ? 'not-allowed' : 'pointer'}
                        onClick={() => !isSlotReserved(slot.id, time) && handleSelectSlot(slot.id, time)}
                      >
                        <Tables
                          seats={table.seats}
                          isSelected={selectedSlot && selectedSlot.slotId === slot.id && selectedSlot.time === time}
                          isReserved={isSlotReserved(slot.id, time)}
                          onClick={() => handleSelectSlot(slot.id, time)}
                        />
                        <Text fontSize="md">{table.seats}-Seater</Text>
                        <Text fontSize="sm">{time}</Text>
                      </Box>
                    </motion.div>
                  ))
                ))}
              </HStack>
            ))
          ) : (
            <Text>No available slots for the selected date.</Text>
          )}
        </VStack>
        <Button colorScheme="purple" mt={4} onClick={handleSubmit} disabled={!selectedSlot}>
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default DisplaySlots;
