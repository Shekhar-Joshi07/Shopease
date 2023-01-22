import { Box, Flex, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdCheckCircle} from "react-icons/md";

const SingleHomeCard = () => {
//   const navigate = useNavigate();
    const [deal, setDeal] = useState({});
    const { id } = useParams();
    console.log(id);

    // const handleAddCard = () =>{
    //   navigate("/cart")
    // }
    const handleCart = () =>{
      
    }

    useEffect(() =>{
      axios.get(`https://shopease-5vqg.onrender.com/Deals_of_the_Day/${id}`).then((res) =>{
        console.log(res.data);
        setDeal(res.data);
      }).catch((err) =>{
        console.log("Error feching Data");
      })
    },[id]);

  return (
    <Box bg={"#eef6f9"} p="2rem">
      <Flex alignItems="center"   bg="white">
        <Box w="60%">
            <img width="70%" src={deal.image} alt={deal.id} />
        </Box>
        <Box lineHeight="3rem" bg="white" >
            <Text fontSize='3xl'>{deal.title}</Text>
            <Flex gap={2} justifyContent="left" alignItems="center">
              <Text as="b" fontSize="2xl">{deal.real_price}</Text>
              <Text fontSize='md' as="del">{deal.price}</Text>
              <Text fontSize="xl" color="#4ca8b6">{deal.discount_off}</Text>
            </Flex>
            <UnorderedList color="gray.400">
              <ListItem>Display Size : 1.8 inches (4.57 cm)</ListItem>
              <ListItem>Warranty Available : Manufacturer Warranty</ListItem>
            </UnorderedList>
            <Flex gap={5}>
            <button 
            style={{
              color:"#ff7856" ,
                width:"200px",
                height:"50px",
                backgroundColor:"white",
                borderRadius:"10px",
                border:"2px solid #ff7856"

            }}
            
            onClick={handleCart}>ADD TO CART</button>
            <button style={{
              color:"white" ,
                width:"200px",
                height:"50px",
                backgroundColor:"#ff7856",
                borderRadius:"10px"

            }}>BUY NOW</button>
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
    </Box>
  )
}

export default SingleHomeCard