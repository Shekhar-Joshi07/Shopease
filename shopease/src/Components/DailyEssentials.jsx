import { Box, Stack, Grid, Heading, Skeleton } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import axios from "axios";
import DailyEssentailsProductCards from "./DailyEssentailsProductCards";
const DailyEssentails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://shopease-5vqg.onrender.com/Daily_Essentials")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log("error is", e);
        setLoading(false);
      });
  }, []);

  return (
    <Box mt={"30px"} ml={"1%"} mr={"1%"} overflow={"hidden"}>
      <Heading mb={"15px"} size={"md"}>
        Daily Essentials
      </Heading>
      {loading ? (
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
          {data.map((e) => (
            <DailyEssentailsProductCards
              key={e.id}
              category={e.category}
              price={e.price}
              image={e.image}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default DailyEssentails;
