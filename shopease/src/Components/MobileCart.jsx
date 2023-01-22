import { Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const MobileCart = ({id, title, img_section, p_price, old_prices, prd_discount}) => {
  const navigate = useNavigate();
  return (
    <Grid onClick={() => navigate(`/mobile/${id}`)} gap={4} w="20rem" p="2rem" _hover={{ border: "1px solid #4ca8b6", boxShadow:'md' }}>
        <img width="100%" src={img_section} alt={title} />
        <h5>{title}</h5>
        <Flex gap={2} justifyContent="center">
            <h5>₹{p_price}</h5>
            <Text fontSize='md' as="del">{old_prices}</Text>
            <h3 style={{color:"#4ca8b6"}}>{prd_discount}</h3>
        </Flex>
    </Grid>
  )
}

export default MobileCart