import React from "react";
import { Image, Text, VStack, Flex, Box, HStack } from "@chakra-ui/react";

const FestiveSpecialsCards = ({ image, category, price }) => {
  // console.log(image);
  return (
    <HStack
      display={"flex"}
      flexDirection="column"
      _hover={{ border: "1px solid #24a3b5" }}
      fontFamily={"Roboto, Arial, Helvetica, sans-serif"}
      padding={4}
      pt={6}
      pb={10}
      bg={"white"}
      alignContent={"flex-start"}
    >
      <VStack>
        <Image
          _hover={{ transform: "scale(1.1)" }}
          src={image}
          textAlign={"center"}
          alt={"product_Images"}
          h={"150px"}
        />
      </VStack>

      <HStack mt={5}>
        <Text
          overflow="hidden"
          whiteSpace="nowrap"
          color="#757575"
          lineHeight={"normal"}
          fontSize={"14px"}
        >
          {category}
        </Text>
        <Text as="span" fontSize="sm" color="gray.500" ml={1}>
          ...
        </Text>
      </HStack>

      <Text fontSize={"16px"}>{price}</Text>
    </HStack>
  );
};

export default FestiveSpecialsCards;
