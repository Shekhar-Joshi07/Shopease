import { Box, Grid, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
const DealsOfTheDay = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://shopease-5vqg.onrender.com/Deals_of_the_Day")
      .then((res) => setData(res.data))
      .catch((e) => console.log("error is", e));
  }, []);
  console.log(data);
  return (
    <Box>
      <Heading ml={"2%"} size={"lg"}>
        Deals of the Day
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)">
        {data.map((e) => (
          <ProductCard
            key={e.id}
            title={e.title}
            price={e.price}
            real_price={e.real_price}
            image={e.image}
            discount={e.discount_off}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default DealsOfTheDay;
