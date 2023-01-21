import { Box, Grid, Heading, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getDealdataFailure, getDealdataRequest, getDealdataSuccess } from "../Redux/HomeRedux/action";
const DealsOfTheDay = () => {
  const dispatch = useDispatch();
 
  const {dealdata, isLoading, isError} = useSelector((store) =>{
    console.log(store.dealReducer);
    return {
        dealdata : store.dealReducer.dealdata,
        isLoading : store.dealReducer.isLoading,
        isError : store.dealReducer.isError,
    }
  })

  useEffect(() => {
    dispatch(getDealdataRequest());
    axios
      .get("https://shopease-5vqg.onrender.com/Deals_of_the_Day")
      .then((res) => {
        dispatch(getDealdataSuccess(res.data));
      })
      .catch((e) => {
        console.log("error is", e);
        dispatch(getDealdataFailure());
      });
  }, []);
  // console.log(data);
  return (
    <Box mt={"30px"} ml={"1%"} mr={"1%"} overflow={"hidden"}>
      <Heading mb={"15px"} mt={"30px"} size={"md"}>
        Deals of the Day
      </Heading>
      {isLoading ? (
        <Stack>
          <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
          <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
          <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
          <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
          <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
          <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
          <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
        </Stack>
      ) : (
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
        >
          {dealdata.map((e) => (
            <ProductCard
              key={e.id}
              id={e.id}
              title={e.title}
              price={e.price}
              real_price={e.real_price}
              image={e.image}
              discount={e.discount_off}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default DealsOfTheDay;
