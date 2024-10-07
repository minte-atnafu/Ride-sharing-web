import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const AddPaymentMethodModal = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [cvc, setCVC] = useState("");

  return (
    <Box mb={10}>
      <Text fontSize="lg" fontWeight="bold">
        Add Payment Method
      </Text>
      <FormControl mt="4">
        <FormLabel>Card Number</FormLabel>
        <Input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </FormControl>
      <FormControl
        mt="4"
        display="flex"
        justifyContent="space-between"
        flexWrap={"wrap"}
      >
        <Box>
          <FormLabel>Expiration Date</FormLabel>
          <Input
            type="text"
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel>CVC</FormLabel>
          <Input
            type="text"
            value={cvc}
            onChange={(e) => setCVC(e.target.value)}
          />
        </Box>
      </FormControl>
      <Button
        mt="4"
        colorScheme="blue"
        isDisabled={!cardNumber || !expirationMonth || !cvc}
      >
        Add Payment Method
      </Button>
    </Box>
  );
};

export default AddPaymentMethodModal;
