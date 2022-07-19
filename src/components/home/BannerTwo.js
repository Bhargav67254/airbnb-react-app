import React from "react";
import styled from "styled-components";
import Card from "./banner/Card";
import CardTwo from "./banner/CardTwo";
const BannerTwo = () => {
  return (
    <Container>
      <h1>Inspiration for your next trip</h1>
      <CardList>
        <Card
          color={"#de3151"}
          image={"images/01.webp"}
          city="Oceann City"
          miles="157 miles away"
        />
        <Card
          color={" #d93b30"}
          image={"images/02.webp"}
          city={"Aptos"}
          miles={"2,398 miles away"}
        />
        <Card
          image={"images/03.webp"}
          city={"Luray"}
          miles={"58 miles away"}
          color={"#cc2d4a"}
        />
        <Card
          color={"#bc1ace"}
          image={"images/04.webp"}
          city={"Myrtel Beach"}
          miles={"378 miles away"}
        />
      </CardList>
      <BottomCard>
        <CardTwo
          image={"images/banner2.jpg"}
          heading={"Things to do on your trip"}
        />
        <CardTwo
          image={"images/banner3.jpg"}
          heading={"Things to do with your family"}
        />
      </BottomCard>
    </Container>
  );
};

export default BannerTwo;

const Container = styled.div`
  background-color: whitesmoke;
  padding: 100px 0px;
  overflow-x: hidden;
  h1 {
    color: #222222;
    margin: 0px 25px;
    font-weight: 500;
  }
  @media screen and (max-width: 800px) {
    h1 {
      margin: 0px 10px;
    }
  }
`;
const CardList = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding-left: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 800px) {
    padding: 0px 0px;
  }
`;
const BottomCard = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
