import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Topbar from "../HomePage/components/TopbarComponent/Topbar";
import Footer from "../HomePage/components/FooterComponent/Footer";
import { FaEye } from "react-icons/fa";
import {useNavigate,Link as ReactRouterLink } from "react-router-dom";

function DriverRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [driver_license, setdriver_license] = useState("");
  const [license_plate, setlicense_plate] = useState("");
  const [car_model, setcar_model] = useState("");
  const [carYear, setCarYear] = useState("");
  const [numberOfSite, setnumberOfSite] = useState("");
  const [smoking, setSmoking] = useState(false);
  const [music, setMusic] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
  const [errors, setErrors] = useState({});

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!driver_license)
      newErrors.driverLicense = "Driver License Number is required";
    if (!license_plate) newErrors.licensePlate = "License Plate is required";
    if (!car_model) newErrors.carModel = "Car Model is required";
    if (!carYear) newErrors.carYear = "Car Year is required";
    if (!numberOfSite) newErrors.numberOfSite = "Number of Sites is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Call API to register driver
      try {
        const response = await fetch(
          "http://localhost:8081/DriverRegisterPage",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              password,
              driver_license,
              license_plate,
              car_model,
              carYear,
              numberOfSite,
              preferences: {
                smoking: smoking ? 'yes' : 'no',
                music: music ? 'yes' : 'no',
                pet_friendly: petFriendly ? 'yes' : 'no',
              },
            }),
          }
        );
        const data = await response.json();
        // Handle registration success
        localStorage.setItem("token_id", data.token_id);
        navigate("/driver"); // Navigate to driver page on success
      } catch (error) {
        setErrors({ api: error.message });
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
            <Heading as="h1" size="lg" color="gray.800">
            የአሽከርካሪ መግቢያ
            </Heading>
          </Flex>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={errors.name}>
              <FormLabel color={"gray.800"} fontWeight={"bolder"}>
                ስም
              </FormLabel>
              <Input
                color={"blue.200"}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="ስምዎን ያስገቡ"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                ኢሜል
              </FormLabel>
              <Input
                color={"blue.200"}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ኢሜል ያስገቡ"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              የይለፍ ቃል
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="የይልፍ ቃልዎን ያስገቡ"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "ደብቅ" : "አሳይ"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.confirmPassword}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              የይለፍ ቃልዎን ያረጋግጡ
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="የይልፍ ቃልዎን ያስገቡ"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "ደብቅ" : "አሳይ"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.driver_license}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                የመንጃ ፍቃድ ቁጥርህ
              </FormLabel>
              <Input
                color={"blue.200"}
                value={driver_license}
                onChange={(event) => setdriver_license(event.target.value)}
                placeholder="የመንጃ ፍቃድ ቁጥርዎን ያስገቡ"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.driverLicense}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.license_plate}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                ታርጋ ቁጥር
              </FormLabel>
              <Input
                color={"blue.200"}
                value={license_plate}
                onChange={(event) => setlicense_plate(event.target.value)}
                placeholder="የታርጋ ቁጥርዎን ያስገቡ"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.licensePlate}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.car_model}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              የመኪና ሞዴል              </FormLabel>
              <Input
                color={"blue.200"}
                value={car_model}
                onChange={(event) => setcar_model(event.target.value)}
                placeholder="የመኪናዎን ሞዴል ያስገቡ"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.car_model}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.numberOfSite}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              የወንበር ብዛት              </FormLabel>
              <Input
                color={"blue.200"}
                value={numberOfSite}
                onChange={(event) => setnumberOfSite(event.target.value)}
                placeholder="የወንበር ብዛት ያስገቡ"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.numberOfSite}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.carYear}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              የመኪና ዓመት              </FormLabel>
              <Input
                color={"blue.200"}
                value={carYear}
                onChange={(event) => setCarYear(event.target.value)}
                placeholder="የተመረተበትን አመት ያስገቡ"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.carYear}</FormErrorMessage>
            </FormControl>

            <HStack spacing={8}>
              <Checkbox
                isChecked={smoking}
                onChange={(e) => setSmoking(e.target.checked)}
              >
                    አለማጨስ              </Checkbox>
              <Checkbox
                isChecked={music}
                onChange={(e) => setMusic(e.target.checked)}
              >
                        ሙዚቃ የለም              </Checkbox>
              <Checkbox
                isChecked={petFriendly}
                onChange={(e) => setPetFriendly(e.target.checked)}
              >
                      ለቤት እንስሳት ተስማሚ              </Checkbox>
            </HStack>

            <Button type="submit" colorScheme="teal" w={"full"} mt={4}>
            ተመዝገብ            </Button>

            {errors.api && (
              <Box color="red.500" mt={4}>
                {errors.api}
              </Box>
            )}
          </form>
          <Text mt={4} fontSize="sm" color="gray.600">
          አካውንት የለህም?{" "}
            <ReactRouterLink to={"/driver-login"} color="teal.500">
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

export default DriverRegisterPage;
