import React from "react";
import { Image, Text, HStack, VStack, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";
const ProductCard = ({id, image, title, price, real_price, discount }) => {

  const navigate = useNavigate();
  // console.log(image);
  console.log(id);
  return (
    <VStack
      onClick={() => navigate(`/deal/${id}`)}
      _hover={{ border: "1px solid #24a3b5" }}
      fontFamily={"Roboto, Arial, Helvetica, sans-serif"}
      padding={3}
      pt={6}
      pb={10}
      bg={"white"}
      alignContent={"flex-start"}
      justifyContent={"left"}
      textAlign={"left"}
    >
      <Image
        _hover={{ transform: "scale(1.1)" }}
        w={"190px"}
        h={"180px"}
        src={image}
        alt={title}
      />

      <Flex justifyContent={"left"} width="150px" mt={20}>
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

export default ProductCard;
