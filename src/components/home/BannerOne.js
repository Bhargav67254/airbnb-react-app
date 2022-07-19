import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <Container>
      <Wrapper>
        <img src="banner1.jpg" alt="" />
        <Details>
          <h1>Not sure where to go? Perfect.</h1>
          <Link
            to={"/search"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <GotoButton>I'm flexible</GotoButton>
          </Link>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default BannerOne;
const Container = styled.div`
  width: 100%;
  padding-top: 150px;
  background-color: black;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 80px;
  @media screen and (max-width: 800px) {
    margin-top: 100px;
  }
  img {
    width: 85%;
    object-fit: contain;
    opacity: 0.7;
    border-radius: 10px;
  }
  @media screen and (max-width: 800px) {
    img {
      width: 95%;
    }
  }
  @media screen and (max-width: 800px) {
    img {
      width: 98%;
    }
  }
`;

const Details = styled.div`
  position: absolute;
  bottom: 15%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: whitesmoke;
    font-size: 40px;
    font-weight: 500;
  }
  @media screen and (max-width: 630px) {
    h1 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 300px) {
    h1 {
      font-size: 15px;
    }
  }
`;
const GotoButton = styled(Button)`
  background-color: whitesmoke !important;
  text-transform: inherit !important;
  color: #9e018c !important;
  font-size: 20px !important;
  padding: 5px 30px !important;
  margin-top: 20px !important;
  font-weight: 530 !important;
  border-radius: 30px !important;
`;
