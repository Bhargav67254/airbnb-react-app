import React, { useState } from "react";
import styled from "styled-components";
import Back from "@mui/icons-material/ArrowBack";
import SearchBox from "../components/search/SearchBox";
import Menu from "@mui/icons-material/Menu";
import CheckinBox from "../components/search/CheckinBox";
import CheckoutBox from "../components/search/CheckoutBox";
import GuestsBox from "../components/search/GuestsBox";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCheckIn, setOpenCheckIn] = useState(false);
  const [openCheckOut, setOpenCheckOut] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const [openNevBar, setOpenNevBar] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [pets, setPets] = useState(0);
  const [countryName, setCountryName] = useState("");

  const totalLimits = 15;

  const totalGuests = adults + kids + pets;

  const totalPetsLimit = 5;

  function One() {
    setOpenSearch(true);
    setOpenCheckIn(false);
    setOpenCheckOut(false);
    setOpenGuest(false);
    setOpenNevBar(false);
  }
  function Two() {
    setOpenCheckIn(true);
    setOpenSearch(false);
    setOpenCheckOut(false);
    setOpenGuest(false);
    setOpenNevBar(false);
  }
  function Three() {
    setOpenCheckOut(true);
    setOpenCheckIn(false);
    setOpenSearch(false);
    setOpenGuest(false);
    setOpenNevBar(false);
  }
  function Four() {
    setOpenGuest(true);
    setOpenCheckIn(false);
    setOpenSearch(false);
    setOpenCheckOut(false);
    setOpenNevBar(false);
  }
  function Five() {
    setOpenGuest(false);
    setOpenCheckIn(false);
    setOpenSearch(false);
    setOpenCheckOut(false);
  }

  return (
    <Container>
      <Header>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <BackButton />
        </Link>
        <Wrapper openNevBar={openNevBar}>
          <Wrapp onClick={One}>
            <p>Search</p>
          </Wrapp>
          <Wrapp onClick={Two}>
            <p>Check in</p>
          </Wrapp>
          <Wrapp onClick={Three}>
            <p>Check out</p>
          </Wrapp>
          <Wrapp onClick={Four}>
            <p>Guests</p>
          </Wrapp>
          {countryName || adults || kids || pets ? (
            <Link
              to={{
                pathname: "/result",
                state: {
                  countryName,
                  checkInDate,
                  checkOutDate,
                  adults,
                  kids,
                  pets,
                },
              }}
            >
              <SearchButton />
            </Link>
          ) : (
            <SearchButton />
          )}
        </Wrapper>
        <MenuButton onClick={() => setOpenNevBar(!openNevBar)} />
      </Header>
      <Boxes>
        {openSearch && (
          <SearchBox
            Five={Five}
            countryName={countryName}
            setCountryName={setCountryName}
          />
        )}
        {openCheckIn && (
          <CheckinBox
            Five={Five}
            openCheckIn={openCheckIn}
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
          />
        )}
        {openCheckOut && (
          <CheckoutBox
            Five={Five}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
          />
        )}
        {openGuest && (
          <GuestsBox
            Five={Five}
            adults={adults}
            setAdults={setAdults}
            kids={kids}
            setKids={setKids}
            pets={pets}
            setPets={setPets}
            totalLimits={totalLimits}
            totalGuests={totalGuests}
            totalPetsLimit={totalPetsLimit}
          />
        )}
      </Boxes>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid lightgray;
  height: 60px;
  width: 100%;
  padding: 10px 30px;
  margin: 10px 0px;
  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.7);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 50px;
  justify-content: center;
  border: 1px solid lightgray;
  @media screen and (max-width: 700px) {
    position: fixed;
    top: 70px;
    right: 15px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 85%;
    z-index: 1000;
    transition: transform 800ms ease-in-out;
    transform: ${(props) =>
      props.openNevBar ? "translateX(0%)" : "translateX(200%)"};
  }
`;
const Wrapp = styled.div`
  padding: 10px 30px;
  border-radius: 50px;
  margin: 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    font-weight: 500;
  }
  :hover {
    background-color: lightgray;
  }
  @media screen and (max-width: 700px) {
    padding: 10px 5px;
    margin: 0px;
  }
`;
const BackButton = styled(Back)`
  cursor: pointer;
`;

const MenuButton = styled(Menu)`
  cursor: pointer;
`;

const Boxes = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;
const SearchButton = styled(SearchIcon)`
  background-color: #ff385c !important ;
  margin: 0px 10px !important;
  border-radius: 100%;
  font-size: 30px !important;
  padding: 5px;
  color: white;
  cursor: pointer;
`;
