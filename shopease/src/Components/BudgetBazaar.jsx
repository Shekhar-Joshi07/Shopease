import { Box, Image, Grid, Heading } from "@chakra-ui/react";
import React from "react";

const BudgetBazaar = () => {
  return (
    <Box ml="1%" mr="1%" mt="30px">
      <Heading mb="15px" size={"md"}>
        Budget Bazaar
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
      >
        <Box>
          <Image
            src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_01.jpg"
            alt="Banner"
          />
        </Box>
        <Box>
          <Image
            src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_02.jpg"
            alt="Banner"
          />
        </Box>
        <Box>
          <Image
            src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_03.jpg"
            alt="Banner"
          />
        </Box>
        <Box>
          <Image
            src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_04.jpg"
            alt="Banner"
          />
        </Box>
        <Box>
          <Image
            src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_05.jpg"
            alt="Banner"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default BudgetBazaar;
