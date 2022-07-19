import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Search, Language } from "@mui/icons-material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HotelCard from "../components/result/HotelCard";

const ResultsPage = () => {
  const location = useLocation();

  const { countryName, checkInDate, checkOutDate, adults, kids, pets } =
    location.state;

  return (
    <Container>
      <Header>
        <LeftHeader>
          <Link to={"/"}>
            <img src="2.png" alt="" />
          </Link>
        </LeftHeader>
        <MiddleHeader to={"/search"}>
          <SearchIcon />
          <p>where are you going</p>
        </MiddleHeader>
        <RightHeader>
          <p>Become a host</p>
          <Icon>
            <EarthIcon />
          </Icon>
        </RightHeader>
      </Header>
      <Results>
        <h1>Stays nearby</h1>
        <HotelList>
          <HotelCard
            image={"images/hotel1.jpg"}
            location={countryName}
            firstDate={checkInDate.toDateString()}
            lastDate={checkOutDate.toDateString()}
            adults={adults}
            newLocation={"New York"}
            kids={kids}
            pets={pets}
          />
          <HotelCard
            image={"images/hotel2.jpg"}
            location={countryName}
            firstDate={checkInDate.toDateString()}
            lastDate={checkOutDate.toDateString()}
            adults={adults}
            newLocation={"California"}
            kids={kids}
            pets={pets}
          />
          <HotelCard
            image={"images/hotel3.jpg"}
            location={countryName}
            firstDate={checkInDate.toDateString()}
            lastDate={checkOutDate.toDateString()}
            adults={adults}
            newLocation={"Texas"}
            kids={kids}
            pets={pets}
          />
          <HotelCard
            image={"images/hotel4.jpg"}
            location={countryName}
            firstDate={checkInDate.toDateString()}
            lastDate={checkOutDate.toDateString()}
            adults={adults}
            kids={kids}
            pets={pets}
            newLocation={"Florida"}
          />
          <HotelCard
            image={"images/hotel5.jpg"}
            location={countryName}
            firstDate={checkInDate.toDateString()}
            lastDate={checkOutDate.toDateString()}
            adults={adults}
            kids={kids}
            pets={pets}
            newLocation={"Hawaii"}
          />
        </HotelList>
      </Results>
    </Container>
  );
};

export default ResultsPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  border-radius: 50px;
  position: fixed !important;
  top: 10px;
  width: 100%;
  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.7);
  z-index: 100 !important;
`;
const LeftHeader = styled.div`
  img {
    width: 100px;
    height: auto;
    object-fit: contain;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const MiddleHeader = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 8px 20px;
  border-radius: 50px;
  text-decoration: none;

  p {
    font-size: 18px;
    font-weight: 500;
    color: black;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 550;
    padding: 8px 10px;
    border-radius: 50px;
    cursor: pointer;
    :hover {
      transition: background-color 500ms;
      background-color: lightgray;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const SearchIcon = styled(Search)`
  background-color: #ff385c !important ;
  margin: 0px 10px !important;
  border-radius: 100%;
  font-size: 30px !important;
  padding: 5px;
  color: white;
  cursor: pointer;
`;
const EarthIcon = styled(Language)``;
const Icon = styled(IconButton)`
  margin: 0px 10px !important;
`;
const Results = styled.div`
  margin-top: 200px;
  padding: 0px 10px;
  width: 100%;
  h1 {
    text-align: center;
    font-weight: normal;
  }
`;
const HotelList = styled.div`
  margin-top: 50px;
`;
