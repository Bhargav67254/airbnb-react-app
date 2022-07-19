import React from "react";
import styled from "styled-components";

const CardTwo = ({ image, heading }) => {
  return (
    <Container>
      <img src={image} alt="" />
      <Details>
        <h1>{heading}</h1>
      </Details>
    </Container>
  );
};

export default CardTwo;

const Container = styled.div`
  position: relative;
  margin: 20px;
  img {
    width: 100% !important;
    border-radius: 10px;
    height: 500px;
    object-fit: cover;
  }
`;
const Details = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  z-index: 1;
  h1 {
    color: white !important;
    font-weight: 550;
  }
`;
