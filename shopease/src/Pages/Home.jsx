import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import DailyEssentails from "../Components/DailyEssentials";
import DealsOfTheDay from "../Components/DealsOfTheDay";
import FestiveSpecials from "../Components/FestiveSpecials";
import PrimeMall from "../Components/PrimeMall";
import TrendingFashionZone from "../Components/TrendingFashionZone";
import YourGadgetsStore from "../Components/YourGadgetsStore";

const Home = () => {
  return (
    <Box bg={"#eef6f9"}>
      <Heading>Home</Heading>
      <DealsOfTheDay />
      <YourGadgetsStore />
      <DailyEssentails />
      <PrimeMall />
      <FestiveSpecials />
      <TrendingFashionZone />
    </Box>
  );
};

export default Home;
