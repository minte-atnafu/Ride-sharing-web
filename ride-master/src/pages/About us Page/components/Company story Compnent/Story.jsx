
import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { FaHistory } from 'react-icons/fa';

const story = () => {
  return (
    <Box m={100}>
      <Heading size="lg" mb={4} textAlign={'center'} fontFamily={'initial'}>
      ታሪካችን
      </Heading>
      <Box display={'flex'} alignItems={'center'}>
      <FaHistory size={500}/>
      <Text fontSize="md" fontWeight={'bolder'} ml={10}>
      የጉዞ መጋራት ፕሮግራማችን መጓጓዣን የበለጠ ተደራሽ እና ለሁሉም ሰው ምቹ ለማድረግ ካለው ፍላጎት የተነሳ ነው። ሰዎች ጉዞ የሚጋሩበት እና የካርበን አሻራቸውን የሚቀንሱበት ማህበረሰብ የመፍጠር ሀሳብ አነሳስተናል።

ከጀመርንበት ጊዜ ጀምሮ በሺዎች የሚቆጠሩ ሰዎች ከ ነጥብ ሀ እስከ ነጥብ ለ እንዲደርሱ ረድተናል፣ እናም ወደ ዘላቂ መጓጓዣ የንቅናቄው አካል በመሆናችን ኩራት ይሰማናል።
      </Text>
      </Box>
    </Box>
  );
};

export default story;
