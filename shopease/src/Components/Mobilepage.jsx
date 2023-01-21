import React, { useEffect } from 'react';
import axios from "axios";
import MobileCart from './MobileCart';
import { Box, Flex, Grid } from '@chakra-ui/react';
import MobileSidebar from './MobileSidebar';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMobiledataFailure, getMobiledataRequest, getMobiledataSuccess } from '../Redux/MobileRedux/action';

const Mobilepage = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    const {mobdata, isLoading, isError} = useSelector((store) =>{
      console.log(store.mobileReducer);
      return {
          mobdata : store.mobileReducer.mobdata,
          isLoading : store.mobileReducer.isLoading,
          isError : store.mobileReducer.isError,
      }
    })

    const getData = () =>{
        dispatch(getMobiledataRequest());
        axios.get("https://shopease-5vqg.onrender.com/mobileData",{
          params : {
            brand : searchParams.getAll("brand")
           }
        }).then((res) =>{
            console.log(res.data);
            dispatch(getMobiledataSuccess(res.data));
        }).catch((err) =>{
            dispatch(getMobiledataFailure());
        })
    }

    useEffect(()=>{
      getData();
    },[location.search]);
    
  return (
       <Flex justifyContent="space-evenly" gap={4} bg={"#eef6f9"} pt="1.5rem">
         <MobileSidebar />
         <Box w="75%" boxShadow='xs' bg="white">
          <Grid templateColumns='repeat(3, 1fr)' templateRows='auto' gap={4}>
           {mobdata?.map((el)=> <MobileCart key={el.id} {...el} />)}
          </Grid>
         </Box>
       </Flex>
  )
}

export default Mobilepage