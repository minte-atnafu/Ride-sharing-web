
import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

const teamMembers = [
  {
    name: "አንዋር ጋሻው",
    title: "የኤሌክትሪክ እና የኮምፒተር መሐንዲስ",
    image: "src/assets/anu.jpg",
    description: "አንዋር ጋሻው  አራተኛ አመት የኤሌክትሪክ እና የኮምፒውተር ምህንድስና ተማሪ ",
  },
  {
    name: "ተካልኝ መስፍን",
    title: "የኤሌክትሪክ እና የኮምፒተር መሐንዲስ",
    image: "src/assets/teke.jpg",
    description: " አራተኛ አመት የኤሌክትሪክ እና የኮምፒውተር ምህንድስና ተማሪ ",
  },
  {
    name: "ምንተስኖት አጥናፉ",
    title: "የኤሌክትሪክ እና የኮምፒተር መሐንዲስ",
    image: "src/assets/up.jpg",
    description: "  አራተኛ አመት የኤሌክትሪክ እና የኮምፒውተር ምህንድስና ተማሪ ",
  },
  {
    name: "ዮናስ ፍቃዴ",
    title: "የኤሌክትሪክ እና የኮምፒተር መሐንዲስ",
    image: "src/assets/yoni.jpg",
    description: "  አራተኛ አመት የኤሌክትሪክ እና የኮምፒውተር ምህንድስና ተማሪ ",
  },
];

const TeamIntroduction = () => {
  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 2 });

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={40}>
      የኛ ቡድን
      </Text>
      <SimpleGrid columns={columnCount} spacing={8} mt={10}>
        {teamMembers.map((member, index) => (
          <Grid templateColumns="repeat(2, 1fr)" key={index} gap={4}>
            <GridItem w="100%">
              <Image
                src={member.image}
                alt={`${member.name} headshot`}
                borderRadius="md"
              />
            </GridItem>
            <GridItem w="100%">
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {member.name}
              </Text>
              <Text fontSize="lg" mb={4} fontWeight={'bold'}>
                {member.title}
              </Text>
              <Text fontSize="md">{member.description}</Text>
            </GridItem>
          </Grid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeamIntroduction;