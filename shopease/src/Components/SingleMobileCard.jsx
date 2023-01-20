import { Box, Button, Flex, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdCheckCircle} from "react-icons/md";

const SingleMobileCard = () => {
  const navigate = useNavigate();
    const [cartdata, setCartdata] = useState([]);
    const [mobdata, setMobdata] = useState({});
    const { id } = useParams();
    console.log(id);

    const handleAddCard = () =>{
      navigate("/cart")
    }

    console.log(cartdata);

    useEffect(() =>{
      axios.get(`https://shopease-5vqg.onrender.com/mobileData/${id}`).then((res) =>{
        console.log(res.data);
        setMobdata(res.data);
        const newmobdata = [];
        newmobdata.push(res.data);
        setCartdata(newmobdata);
      }).catch((err) =>{
        console.log("Error feching Data");
      })
    },[id]);

  return (
    <Flex w="200rem">
        <Box w="10%">
            <img width="100%" src={mobdata.img_section} alt={mobdata.id} />
        </Box>
        <Box lineHeight="3rem">
            <Text fontSize='3xl'>{mobdata.title}</Text>
            <Text fontSize='xl' color="#4ca8b6" textAlign="left">{mobdata.brand}</Text>
            <Flex gap={2} justifyContent="left" alignItems="center">
              <Text as="b" fontSize="2xl">{mobdata.p_price}</Text>
              <Text fontSize='md' as="del">{mobdata.old_prices}</Text>
              <Text fontSize="xl" color="#4ca8b6">{mobdata.prd_discount}</Text>
            </Flex>
            <UnorderedList color="gray.400">
              <ListItem>Display Size : 1.8 inches (4.57 cm)</ListItem>
              <ListItem>Warranty Available : Manufacturer Warranty</ListItem>
            </UnorderedList>
            <Flex gap={5}>
            <Button onClick={handleAddCard} px="3rem" py="1.5rem" color="#ff7856" colorScheme='#ff7856' variant='outline'>ADD TO CART</Button>
            <Button px="3rem" py="1.5rem" color="white"  bgColor="#ff7856" variant='solid'>BUY NOW</Button>
            </Flex>
            <List>
              <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
                COD Available
              </ListItem>
              <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
                Free Shipping
              </ListItem>
              <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
                Delivered 2-5 Business Days
              </ListItem>
            </List>
        </Box>
    </Flex>
  )
}

export default SingleMobileCard