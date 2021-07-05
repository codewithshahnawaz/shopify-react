import { Box, Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";

export const ImageWithText = ({ reverse, heading, image, text }) => {
  const revers = reverse ? "row-reverse" : "row";
  return (
    <Box h="100%" py={["1rem",'0']}>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir={["column", revers]}
      >
        <Image src={image} w={["100%","50%"]} />
        <Box w={["100%","50%"]} h="100%" textAlign="center">
          <Heading p="2rem">{heading && heading}</Heading>
          <Text h="100%" p="2rem">
            {text && text}
          </Text>
          <Button
            _hover={{ opacity: "70%" }}
            p="2rem"
            backgroundColor="#FFA8E2"
            color="#fff"
            width="30%"
          >
            SHOP NOW
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
