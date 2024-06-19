import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Setting from "../Driver App Page/components/Settings component/Setting";
import Topbar from "../HomePage/components/TopbarComponent/Topbar";
import Footer from "../HomePage/components/FooterComponent/Footer";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function DriverRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [driverLicense, setDriverLicense] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call API to register driver
    try {
      const response = await fetch("http://localhost:8081/DriverRegisterPage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
          driverLicense,
          licensePlate,
          carModel,
          carYear,
        }),
      });
      const data = await response.json();
      // Handle registration success
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box>
      <Box mb={70}>
        <Topbar />
      </Box>

      <Box>
        <Box
          bg="goldenrod"
          minH="80vh"
          py={20}
          px={4}
          mx="auto"
          maxW="lg"
          borderRadius="lg"
          boxShadow="md"
          marginTop={50}
        >
          <Flex justify="center" mb={4}>
            <Heading as="h1" size="lg" color="gray.600">
              Driver Register
            </Heading>
          </Flex>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={error}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Name
              </FormLabel>
              <Input
                color={"blue.200"}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Email
              </FormLabel>
              <Input
                color={"blue.200"}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Confirm Your Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Re-enter your password"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Your Driver License Number
              </FormLabel>
              <Input
                color={"blue.200"}
                value={driverLicense}
                onChange={(event) => setDriverLicense(event.target.value)}
                placeholder="Enter your driver license number"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                License Plate
              </FormLabel>
              <Input
                color={"blue.200"}
                value={licensePlate}
                onChange={(event) => setLicensePlate(event.target.value)}
                placeholder="Enter your license plate"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Car Model
              </FormLabel>
              <Input
                color={"blue.200"}
                value={carModel}
                onChange={(event) => setCarModel(event.target.value)}
                placeholder="Enter your car model"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Car Year
              </FormLabel>
              <Input
                color={"blue.200"}
                value={carYear}
                onChange={(event) => setCarYear(event.target.value)}
                placeholder="Enter your car year"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Link to = {"/driver"}>
            <Button type="submit" colorScheme="teal" w={"full"} mt={4}>
              Sign Up
            </Button>
            </Link>

          </form>
        </Box>
      </Box>

      <Box mb={10} mt={10}>
        <Footer />
      </Box>
    </Box>
  );
}

export default DriverRegisterPage;
