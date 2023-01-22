import { Box, Button, Text, } from '@chakra-ui/react'
import axios from 'axios';
// import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductinCart from '../Components/ProductinCart';
import { deleteCartData} from '../Redux/CartRedux/action';
// import { useParams } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalcost,setTotalcost] = useState(0);
  let newSum = 0;
  const cart = useSelector((store) =>{
    console.log(store.cartReducer.cart);
    return store.cartReducer.cart
    })

    const deletefunc = (id) =>{
        let carthai = cart.filter((el) => el.id !== id)
        dispatch(deleteCartData(carthai));
        console.log(cart);
    }

    const handlecost = (sum) =>{
      newSum += sum;
      setTotalcost(newSum);
    }

  if(cart.length==0){
    return (
      <Box>
        <Text ml="40px"  fontSize='3xl' as="b">My Cart</Text>
        <hr/>
        <Box textAlign="center">
          <Text p="10rem" fontSize="5xl">Cart is Empty!</Text>
        </Box>
    </Box>
    )
  }
     return (
    <Box >
      
      <Text ml="40px"    fontSize='3xl' as="b">My Cart</Text>
      <hr/>
      <Text>You have {cart.length} items in your cart.</Text>
      {cart?.map((el) => <ProductinCart key={el.id} {...el} deletefunc={deletefunc} handlecost={handlecost} />)}
      <hr />
      <Box textAlign="right" p="1rem">
        <Text fontSize='2xl'>Cart Total : {totalcost}</Text>
        <Text fontSize="2xs">Inclusive of all the applicable taxes</Text>
        <Button onClick={() => navigate("/payment")} w="10%" m="1rem 0 1rem 1rem" p="1rem" color="white" bg="#ff7856">Place Order</Button>
      </Box>
    </Box>
   )
}

export default Cart