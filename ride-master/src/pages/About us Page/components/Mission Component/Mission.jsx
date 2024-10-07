import React from "react";
import { Box, Text, Heading, VStack, HStack, Center, Spacer } from "@chakra-ui/react";
import { FaBullhorn, FaCamera, FaChalkboard } from "react-icons/fa";

const Mission = () => {
  return (
    <Box p={14} m={10}>
      <Center>
        <Heading size="lg" mb={24}>
        የእኛ ተልዕኮ እና ራዕይ
        </Heading>
        
      </Center>
      <HStack spacing={8} alignItems="flex-start" mt={10} mb={10}>
        <Box p={10}>
          <Text fontSize="lg" fontWeight="bold" mb={2} textAlign={"center"}>
            ተልዕኮ
          </Text>
          <Box display={"flex"} alignItems={'center'}>
            <FaBullhorn size={"sm"} />
            <Text fontSize="md" fontWeight={"bolder"} display={"flex"} m={10}>
            የእኛ ተልእኮ በኢትዮጵያ ውስጥ  መጓጓዣዎችን በ
            ምቹ፣ ወጪ ቆጣቢ እና ተስማሚ በሆነ መልኩ ማቅረብ ነው።
            </Text>
          </Box>
        </Box>
        <Box p={10}>
          <Text fontSize="lg" fontWeight="bold" mb={2} textAlign={"center"}>
            ራዕይ
          </Text>
          <Box display={'flex'} alignItems={'center'}>
            <FaCamera  size={'sm'}/>
            <Text m={10} fontSize="md" fontWeight={"bolder"}>
              በኢትዮጵያ ከተሞች ብዙም የትራፊክ መጨናነቅ የማይኖርበት ጊዜን እናስባለን።
               መጓጓዣዎችን በቀላሉ ማቅረብ እና አገልግሎትን ፈጣን ማድረግ ትልቁ ፍላጎታችን ነው።

            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Mission;
