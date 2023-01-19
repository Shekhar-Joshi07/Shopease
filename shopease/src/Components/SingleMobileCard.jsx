import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const SingleMobileCard = () => {
    const [mobdata, setMobdata] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() =>{
      axios.get(`https://shopease-5vqg.onrender.com/mobileData/${id}`).then((res) =>{
        console.log(res.data);
        setMobdata(res.data);
      }).catch((err) =>{
        console.log("Error feching Data");
      })
    },[id]);

  return (
    <Flex>
        <Box>
            <img src={mobdata.img_section} alt={mobdata.id} />
        </Box>
        <Box></Box>
    </Flex>
  )
}

export default SingleMobileCard