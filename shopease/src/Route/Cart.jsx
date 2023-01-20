import { Box, Text } from '@chakra-ui/react'
// import axios from 'axios';
import React from 'react';
import SingleCart from '../Components/SingleCart';
// import { useParams } from 'react-router-dom';

const Cart = () => {
    // const count = carddata.length;
    const cartdata = [];

  return (
    <Box>
      <Text  fontSize='3xl' as="b">My Cart (0 Item)</Text>
      <hr/>
      <Box>
        {cartdata?.map((el) => <SingleCart key={el.id} {...el} />)}
      </Box>
    </Box>
  )
}

export default Cart