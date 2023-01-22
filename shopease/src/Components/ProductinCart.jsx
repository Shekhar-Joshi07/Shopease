import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductinCart = ({id, title, img_section, p_price, old_prices, prd_discount, brand, deletefunc, handlecost}) => {
    const [quantity, setQuantity] = useState(1);
    let sum = quantity*p_price;


   const handledelete = () =>{
      return deletefunc(id);
   }

   useEffect(() =>{
      return handlecost(sum);
   },[quantity])

  return (
    <div>
        <Flex justifyContent="space-evenly" alignItems="center" borderBottom="1px solid grey" p="2rem">
            <Box>
                <img src={img_section} alt={title} />
            </Box>
            <Box>
                <Text>{title}</Text>
            </Box>
            <Box>
                <Text>₹{p_price}</Text>
            </Box>
            <Box color="black">
              <Flex justifyContent="center" alignItems="center">
                <Button onClick={() => setQuantity(prev => prev-1)} disabled={(quantity==0) ? true : false}>-</Button>
                <Text>{quantity}</Text>
                <Button  onClick={() => setQuantity(prev => prev+1)} >+</Button>
              </Flex>
            </Box>
            <Box onClick={handledelete}>
              <DeleteIcon boxSize={4} color="#ff7856" />
            </Box>
        </Flex>
    </div>
  )
}

export default ProductinCart