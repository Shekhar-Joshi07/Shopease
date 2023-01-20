import { Box, Grid, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import axios from "axios";

import FestiveSpecialsCards from "./FestiveSpecialsCards";
const FestiveSpecials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://shopease-5vqg.onrender.com/Festive_Specials")
      .then((res) => setData(res.data))
      .catch((e) => console.log("error is", e));
  }, []);
  console.log(data);
  return (
    <Box mt={"30px"} ml={"1%"} mr={"1%"}>
      <Heading mb={"15px"} size={"md"}>
        Festive Specials
      </Heading>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
      >
        {data.map((e) => (
          <FestiveSpecialsCards
            key={e.id}
            category={e.category}
            price={e.price}
            image={e.image}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default FestiveSpecials;
