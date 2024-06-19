import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Center,
} from "@chakra-ui/react";
import { MdMyLocation } from "react-icons/md";
import {
  FaLandmark,
  FaMapMarked,
  FaMapMarker,
  FaMapPin,
  FaSearchLocation,
} from "react-icons/fa";

function SearchBar() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  
  const handleSearch = () => {
    // Perform search logic here
  };

  return (
    <Box w={"70%"} ml={"25%"} p={20}>
      <Box>
        <FormControl mb={4}>
          <FormLabel htmlFor="origin">Origin</FormLabel>
          <Box display="flex" alignItems="center">
            <FaMapMarker size={50} />
            <Input
              id="origin"
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Enter origin address"
              mr={6}
              flexGrow={1}
              ml={5}
            />
            <Button
              leftIcon={<MdMyLocation />}
              colorScheme="blue"
              variant="outline"
              onClick={() => setOrigin("Current Location")}
            >
              Current Location
            </Button>
          </Box>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="destination">Destination</FormLabel>
          <Box display={"flex"} alignItems={'center'} >
            <FaLandmark size={50} />
            <Input
              id="destination"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination address"
              mr={2}
              ml={5}
            />{" "}
          </Box>
        </FormControl>

       
        <Button colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
