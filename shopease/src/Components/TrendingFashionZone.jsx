import { Box, Grid, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
const TrendingFashionZone = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://shopease-5vqg.onrender.com/Trending_Fashion_Zone")
      .then((res) => setData(res.data))
      .catch((e) => console.log("error is", e));
  }, []);
  console.log(data);
  return (
    <Box mt={"30px"} ml={"1%"} mr={"1%"}>
      <Heading mb={"15px"} size={"md"}>
        Deals of the Day
      </Heading>
      <Grid
        w={"100%"}
        bg="white"
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
      >
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

export default TrendingFashionZone;
