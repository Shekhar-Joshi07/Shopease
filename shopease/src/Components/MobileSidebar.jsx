import { Box, Checkbox, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MobileSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.getAll("category");
    const [category, setCategory] = useState(initialState || []);

    console.log(category)
 

  const handlefilter = (e) =>{
        const newCategory = [...category];
        // if category is not present push into newCategory
        // if category present splice it
        if(newCategory.includes(e.target.value)){
          newCategory.splice(newCategory.indexOf(e.target.value), 1);
        }
        else{
          newCategory.push(e.target.value);
        }
        setCategory(newCategory);
  }

  useEffect(()=>{
    const params ={
     category,
    }
    setSearchParams(params);
 },[category])

  return (
    <Box w="20%" boxShadow='xs'>
          <h3>Category Filter</h3>
          <Box>
            <h4>Price</h4>
            <Stack pl={6} mt={1} spacing={1}>
              <Checkbox value="MTR" onChange={handlefilter} checked={category.includes("MTR")}>MTR</Checkbox>
              <Checkbox value="Pear" onChange={handlefilter} checked={category.includes("Pear")}>Pear</Checkbox>
              <Checkbox value="Nokia" onChange={handlefilter} checked={category.includes("Nokia")}>Nokia</Checkbox>
              <Checkbox value="Angage" onChange={handlefilter} checked={category.includes("Angage")}>Angage</Checkbox>
            </Stack>
          </Box>
        </Box>
  )
}

export default MobileSidebar