import React from "react";
import { Image, Text, HStack, VStack, Flex } from "@chakra-ui/react";
const Product_card = ({ image, title, price, real_price, discount }) => {
  console.log(image);
  return (
    <VStack
      // _hover={{ bg: "teal.600" }}
      // w={"200px"}
      h={"200px"}
      fontFamily={"Roboto, Arial, Helvetica, sans-serif"}
      padding={3}
    >
      <Image
        _hover={{ transform: "scale(1.1)" }}
        w={"200px"}
        h={"200px"}
        src={image}
        alt={title}
      />

      <Flex width="150px" mt={20}>
        <Text
          overflow="hidden"
          whiteSpace="nowrap"
          color="#757575"
          lineHeight={"normal"}
          fontSize={"14px"}
        >
          {title}
        </Text>
        <Text as="span" fontSize="sm" color="gray.500" ml={1}>
          ...
        </Text>
      </Flex>
      <HStack>
        <Text fontSize={"14px"}>{real_price}</Text>
        <Text fontSize={"14px"} color={"gray"} textDecoration={"line-through"}>
          {price}
        </Text>
        <Text fontSize={"14px"} color={"#24a3b5"}>
          {discount}
        </Text>
      </HStack>
    </VStack>
  );
};

export default Product_card;
