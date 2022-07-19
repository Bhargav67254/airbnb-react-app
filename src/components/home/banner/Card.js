import React from "react";
import styled from "styled-components";

const Card = ({ image, city, miles, color }) => {
  return (
    <Container style={{ backgroundColor: `${color}` }}>
      <Wrapper>
        <img src={image} alt="" />
        <Details>
          <h2>{city}</h2>
          <p>{miles}</p>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default Card;
const Container = styled.div`
  background-color: #d93b30;
  padding-bottom: 80px;
  border-radius: 10px;
  margin: 0px 20px 0px;
  width: 295px;
  @media screen and (max-width: 320px) {
    width: 250px;
  }
`;
const Wrapper = styled.div`
  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 295px;
  }
  @media screen and (max-width: 320px) {
    img {
      width: 250px;
    }
  }
`;
const Details = styled.div`
  margin: 10px;
  color: whitesmoke;
  h2 {
    font-weight: 500;
  }
  p {
    font-weight: 500;
    letter-spacing: 1.2px;
  }
`;
