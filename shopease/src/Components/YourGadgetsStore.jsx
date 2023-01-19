import { Box, Grid, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
const YourGadgetsStore = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://shopease-5vqg.onrender.com/Your_Gadgets_Store")
      .then((res) => setData(res.data))
      .catch((e) => console.log("error is", e));
  }, []);
  console.log(data);
  return (
    <Box>
      <Heading ml={"2%"} size={"lg"}>
        Your Gadgets Store
      </Heading>
      <Grid
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

export default YourGadgetsStore;
