import { Box, Checkbox, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MobileSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.getAll("brand");
    const [brand, setBrand] = useState(initialState || []);

    console.log(brand);
 

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
    <Box w="20%" boxShadow='xs'>
          <h3>Category Filter</h3>
          <Box>
            <h4>Brand</h4>
            <Stack pl={6} mt={1} spacing={1}>
              <Checkbox value="MTR" onChange={handlefilter} checked={brand.includes("MTR")}>MTR</Checkbox>
              <Checkbox value="Pear" onChange={handlefilter} checked={brand.includes("Pear")}>Pear</Checkbox>
              <Checkbox value="Nokia" onChange={handlefilter} checked={brand.includes("Nokia")}>Nokia</Checkbox>
              <Checkbox value="Angage" onChange={handlefilter} checked={brand.includes("Angage")}>Angage</Checkbox>
            </Stack>
          </Box>
        </Box>
  )
}

export default MobileSidebar