import React from 'react';
// import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline ,IoNotificationsOutline,IoCartOutline} from "react-icons/io5";
import {IoMdHeartEmpty} from "react-icons/io"
import {Box, Text, HStack, Flex} from "@chakra-ui/react"

import SearchComp from "../SearchComp"
// import {Search2Icon  } from '@chakra-ui/icons'
import { FcLike } from "react-icons/fc";

import Signup from '../Signup';


import './Navbar.Module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Navbar = () => {

  const cart = useSelector((store) =>{
    console.log(store.cartReducer.cart);
    return store.cartReducer.cart
    })

  return (
    <>
    
  <div className='navbar' >


  <div>
    <Link to="/">
      <img src="https://iili.io/HcHUepe.png" alt="logo" />
    </Link>
  </div>



{/* div for input taking  and search button*/}

<div>


  <SearchComp />
</div>
 
{/* <FaSistrix /> */}
{/* <div>


<Search2Icon  marginRight={3} bg="#E9F6F7"  ml={2}/>

<input type="text" placeholder="What is on your mind Today ?" />


<button >Search</button>
</div> */}



<Box  >


  {/* icons div */}

<HStack spacing={5}>
<IoLocationOutline size={25} color='teal'/>
<IoNotificationsOutline size={25} color='teal'  />
<IoMdHeartEmpty color='red' size={25}  />
<Link to="/cart">
  <Flex>
  <IoCartOutline   size={25} color='teal'/>
  <Text position="relative" left="-0.75rem" top="-0.7rem" bg="#ff7856" borderRadius="7px" p="0.1rem">{cart.length}</Text>
  </Flex>
</Link>
<Signup/>
</HStack>




{/* button for signin.... */}




</Box>






  </div>



{/* // sun navbar -2 */}


<div  className='subnav1'>
<img src="https://images.shopclues.com/images/ui/madeinindia.png" 
alt="" />

<div>



<span>
  MOBILES & MORE
</span>

<span>
  MEN
</span>


<span>
  WOMEN
</span>

<span>
  HOME & kITCHEN 
</span>


<span>
  APPLIANCES
</span>


<span>
  SPORTS & MORE
</span>
<span>
  ESSENTIALS
</span>

<span>
  OFFERS
</span>


<span>
  GLOBAL SHOPPING
</span>
</div>

</div>






{/* subnav-3 */}


<div className='subnav3'>
  <span>Time Sales</span>
  <span>Flu Care</span>
  <span>Food & Beverage</span>
  <span>Personal Hygiene</span>
  <span>Home cleaning</span>
  <span>Nutrients & Supplements</span>
  <span>Kitchen & Dining</span>
  <span>Mobile Accessories</span>
  
</div>





</>

    
    
  )
}
