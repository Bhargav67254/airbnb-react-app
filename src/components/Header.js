import React, { useEffect } from "react";
import styled from "styled-components";
import { Language, Search } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const Header = ({ animation, setAnimation }) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [setAnimation]);
  const handleEffect = () => {
    setAnimation(false);
    window.scrollTo(0, 0);
  };

  return (
    <Navbar animation={animation}>
      {/* animation container */}
      <Container>
        <FirstPart>
          <LeftHeader>
            <Logo>
              {animation ? (
                <img src="2.png" alt="" />
              ) : (
                <img src="1.png" alt="" />
              )}
            </Logo>
          </LeftHeader>
          <RightHeader animation={animation}>
            <p>Become a host</p>
            <Icon>
              <EarthIcon animation={animation} />
            </Icon>
          </RightHeader>
        </FirstPart>
        <SecondPart animation={animation}>
          {animation === false ? (
            <Wrap>
              <Wrapper to={"/search"}>
                <p>Location</p>
              </Wrapper>
              |
              <Wrapper to={"/search"}>
                <p>Check in</p>
              </Wrapper>
              |
              <Wrapper to={"/search"}>
                <p>Check out</p>
              </Wrapper>
              |
              <Wrapper to={"/search"}>
                <p>Guests</p>
              </Wrapper>
              |
              <Link to={"/search"}>
                <SearchIcon animation={animation} />
              </Link>
            </Wrap>
          ) : (
            <SearchBar onClick={handleEffect}>
              <SearchIcon
                animation={animation}
                style={{ marginLeft: "10px" }}
              />
              <p>where are you going</p>
            </SearchBar>
          )}
        </SecondPart>
      </Container>
      {/* animation container */}

      <SearchBarContainer to={"/search"}>
        <SearchIcon />
        <p>where are you going</p>
      </SearchBarContainer>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 800ms;
  z-index: 10;
  height: 70px;
  scroll-behavior: smooth;
  max-width: 1400px;
  background-color: ${(props) => (props.animation ? "white" : "black")};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const FirstPart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5vw 0px 5vw;
`;
const LeftHeader = styled.div``;
const Logo = styled.div`
  img {
    width: 100px;
    height: auto;
    object-fit: contain;
  }
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${(props) => (props.animation ? "black" : "white")};
    margin: 0px 20px;
    padding: 8px 10px;
    border-radius: 50px;
    font-weight: 500;
    cursor: pointer;
    :hover {
      background-color: ${(props) =>
        props.animation ? "lightgray" : "#7c78784b"};
    }
  }
  &.header-textOne {
    p {
      color: red;
    }
  }
`;
const Icon = styled(IconButton)``;

const EarthIcon = styled(Language)`
  color: ${(props) => (props.animation ? "black" : "white")} !important;
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

const SecondPart = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 50px;
  padding: 5px 20px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 800ms;
  border: 1px solid lightgray;
  transform: ${(props) =>
    props.animation ? "translateY(-95%)" : "translateY(0%)"};
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
const Wrapper = styled(Link)`
  border-radius: 50px;
  padding: 10px 20px;
  background-color: white;
  margin: 0px 5px;
  text-decoration: none;
  color: black;

  cursor: pointer;
  p {
    font-size: 13px;
    font-weight: 500;
  }
  :hover {
    background-color: lightgray;
  }
`;
const SearchBar = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 8px 20px;
  p {
    font-weight: 500;
  }
`;
const SearchBarContainer = styled(Link)`
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 8px 20px;
  background-color: white;
  border: 1px solid lightgray;
  margin: 0px 20px;
  margin-top: 6px;
  text-decoration: none;
  color: black;
  p {
    font-weight: 500;
  }
  @media screen and (max-width: 800px) {
    display: flex;
  }
`;
