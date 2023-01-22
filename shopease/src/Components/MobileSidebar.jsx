import { Box, Checkbox, Stack,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {FaFilter} from "react-icons/fa"
import {GoDeviceMobile} from "react-icons/go"
const MobileSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.getAll("brand");
    const [brand, setBrand] = useState(initialState || []);

    // console.log(brand);
 

  const handlefilter = (e) =>{
        const newBrand = [...brand];
        // if category is not present push into newCategory
        // if category present splice it
        if(newBrand.includes(e.target.value)){
            newBrand.splice(newBrand.indexOf(e.target.value), 1);
        }
        else{
            newBrand.push(e.target.value);
        }
        setBrand(newBrand);
  }

  useEffect(()=>{
    const params ={
     brand,
    }
    setSearchParams(params);
 },[brand])

  return (
    <Box pl={3}   w="20%" boxShadow='xs' bg="white" >

      
         
          <Box pos="fixed" top={'200'} >
          <Text display="flex" as="b" fontSize="lg" >Category Filter  <FaFilter size="20px" style={{margin:"auto", marginLeft:"10px"}} color='green' /></Text><br/>
            <Text display="flex" as="i" fontSize="md">BRANDS<GoDeviceMobile size="20px" style={{margin:"auto", marginLeft:"10px"}} color="green" /> </Text>
            
            <Stack  pl={6} mt={1} spacing={1} >
              <Checkbox colorScheme='green' fontWeight="semibold" color="blue.600" value="MTR" onChange={handlefilter} checked={brand.includes("MTR")}>MTR</Checkbox>
              <Checkbox colorScheme='green' fontWeight="semibold" color="blue.600" value="Pear" onChange={handlefilter} checked={brand.includes("Pear")}>Pear</Checkbox>
              <Checkbox colorScheme='green' fontWeight="semibold" color="blue.600"  value="Nokia" onChange={handlefilter} checked={brand.includes("Nokia")}>Nokia</Checkbox>
              <Checkbox colorScheme='green' fontWeight="semibold" color="blue.600" value="Angage" onChange={handlefilter} checked={brand.includes("Angage")}>Angage</Checkbox>
            </Stack>
          </Box>
        </Box>
  )
}

export default MobileSidebar