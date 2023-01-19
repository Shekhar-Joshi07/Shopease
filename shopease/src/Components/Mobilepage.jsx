import React, { useEffect, useState } from 'react';
import axios from "axios";
import MobileCart from './MobileCart';
import { Box, Flex, Grid } from '@chakra-ui/react';
import MobileSidebar from './MobileSidebar';

const Mobilepage = () => {
    const [mobiledata, setMobiledata] = useState([]);

    const getData = () =>{
        axios.get("https://shopease-5vqg.onrender.com/mobileData").then((res) =>{
            console.log(res.data);
            setMobiledata(res.data);
        }).catch((err) =>{
            console.log("Error fetching Data");
        })
    }

    useEffect(()=>{
      getData();
    },[])
  return (
       <Flex justifyContent="space-evenly" gap={4}>
         <MobileSidebar />
         <Box w="75%" boxShadow='xs'>
          <Grid templateColumns='repeat(3, 1fr)' templateRows='auto' gap={4}>
           {mobiledata?.map((el)=> <MobileCart key={el.id} {...el} />)}
          </Grid>
         </Box>
       </Flex>
  )
}

export default Mobilepage