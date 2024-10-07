import React from "react";
import {
  Card,
  Heading,
  CardBody,
  Stack,
  Divider,
  Text,
  AspectRatio,
  HStack,
} from "@chakra-ui/react";

const testimonials = [
  {
    id: 1,
    title: "ዶ/ር ዘበነ ለማ",
    description:
      "ምቹ ትራንስፖርት ነበር በጣም ደስ ብሎኛል።  በጊዜ ለቅዳሴ እድደርስ አርጎኛል እግዚያብሄር ይስጥልኝ። ",
    image: "src/assets/zebene.jpg",
    price: "450 ብር",
  },
  {
    id: 2,
    title: "ሃጂ ሙፍቲ",
    description:
      "መስተንግዷቹ በጣም መልካም ነበር፤ አላምዱሊላሂ ለሶላት በጊዜ ደርሻለው።",
    image: "src/assets/haji.jpg",
    price: "650 ብር",
  },
  {
    id: 3,
    title: "ፓስተር ቸሬ",
    description:
      "on time ናቹ፤ ስራቹን በጣም appriciate ማድረግ ፈልጋለው።",
    image: "src/assets/chere.jpg",
    price: "650 ብር",
  },
];

function Testimonial() {
  return (
    <div className="testimonialContainer">
      <HStack spacing="24px">
        <Card maxW="sm">
          <CardBody>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="naruto"
                src={testimonials[0].image}
                allowFullScreen
              />
            </AspectRatio>
            <Stack mt="6" spacing="3">
              <Heading size="md">{testimonials[0].title}</Heading>
              <Text>{testimonials[0].description}</Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>

        <Card maxW="sm">
          <CardBody>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="naruto"
                src={testimonials[1].image}
                allowFullScreen
              />
            </AspectRatio>
            <Stack mt="6" spacing="3">
              <Heading size="md">{testimonials[1].title}</Heading>
              <Text>{testimonials[1].description}</Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>

        <Card maxW="sm">
          <CardBody>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="naruto"
                src={testimonials[2].image}
                allowFullScreen
              />
            </AspectRatio>
            <Stack mt="6" spacing="3">
              <Heading size="md">{testimonials[2].title}</Heading>
              <Text>{testimonials[2].description}</Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </HStack>
    </div>
  );
}

export default Testimonial;
