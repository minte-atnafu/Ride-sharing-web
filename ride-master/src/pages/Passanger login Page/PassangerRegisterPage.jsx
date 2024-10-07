import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Topbar from "../HomePage/components/TopbarComponent/Topbar";
import Footer from "../HomePage/components/FooterComponent/Footer";
import { useNavigate,Link as ReactRouterLink} from "react-router-dom";

function PassangerRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation (dummy example)
    let errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";
    if (!phoneNumber) errors.phoneNumber = "Phone number is required";

    setError(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("http://localhost:8081/PassangerRegisterPage", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password, confirmPassword, phoneNumber }),
        });
        const data = await response.json();
        // Handle registration success
        localStorage.setItem("token_id", data.token_id);
        navigate("/ride-request"); // Navigate to account page on success
      } catch (error) {
        setError({ server: error.message });
      }
    }
  };

  return (
    <Box>
      <Box mb={70}>
        <Topbar />
      </Box>

      <Box>
        <Box
          bg="blueblack"
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
            የተጠቃሚ መግቢያ
            </Heading>
          </Flex>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={error.name}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                ስም 
              </FormLabel>
              <Input
                color={"blue.200"}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="ስምዎትን አስገቡ"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.email}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                ኢሜል
              </FormLabel>
              <Input
                color={"blue.200"}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ኤሜልህን አስገባ "
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.password}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                የይለፍ ቃል
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="የይለፍ ቃል አስገባ"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "ደብቅ" : "አሳይ"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{error.password}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.confirmPassword}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              የይለፍ ቃልዎን ያረጋግጡ
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="የይለፍ ቃልዎን ደግመው ያስገቡ"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "ደብቅ" : "አሳይ"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{error.confirmPassword}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.phoneNumber}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                ስልክ ቁጥር
              </FormLabel>
              <Input
                color={"blue.200"}
                type="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="ስልክ ቁጥርዎን ያስገቡ"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error.phoneNumber}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.server}>
              <FormErrorMessage>{error.server}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal" w={"full"} mt={4}>
              ተመዝገብ
            </Button>
          </form>
          <Text mt={4} fontSize="sm" color="gray.600">
            አካውንት አለህን?{" "}
          <ReactRouterLink to={"/passanger-login"} color="teal.500">
            ግባ
          </ReactRouterLink>
        </Text>
        </Box>
      </Box>

      <Box mb={10} mt={10}>
        <Footer />
      </Box>
    </Box>
  );
}

export default PassangerRegisterPage;
