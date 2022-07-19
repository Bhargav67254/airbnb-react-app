import React from "react";
import styled from "styled-components";
import BannerOne from "../components/home/BannerOne";
import BannerTwo from "../components/home/BannerTwo";

const HomePage = () => {
  return (
    <Container>
      <Banner>
        <BannerOne />
        <BannerTwo />
      </Banner>
    </Container>
  );
};

export default HomePage;
const Container = styled.div`
  background-color: black;
  width: 100%;
`;
const Banner = styled.div``;
