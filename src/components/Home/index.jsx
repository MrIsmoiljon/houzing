import React from "react";
import Recommended from "../Recommended";
import Filter from "../Filter";
import Carousel from "./Carousel";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
    </Container>
  );
};

export default Home;
