import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Close } from "@mui/icons-material";

const SearchBox = ({ Five, countryName, setCountryName }) => {
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    }
    return getCountries();
  }, []);

  // ---------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const filteredData = rawData(countries);

    setFilteredList(filteredData);
  }, [countries]);

  const rawData = (data) => {
    const filteredData = [...data];
    filteredData.sort((a, b) => {
      if (a.name.common > b.name.common) {
        return +1;
      } else {
        return -1;
      }
    });
    return filteredData;
  };

  // -----------------------------------------------------------------------------------------------------------

  const newData = (string) => {
    const response = filteredList.filter((data) =>
      data.name.common.toLowerCase().startsWith(string.toLowerCase())
    );
    if (input.length > 0) {
      setSearchInput(response);
    }
  };

  useEffect(() => {
    return newData(input);
  }, [input]);

  return (
    <Container>
      <CloseIcon onClick={Five} />

      <input
        type="text"
        placeholder="Search where are you going"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input.length > 0 ? (
        <>
          {searchInput.length > 0 ? (
            <DataContainer>
              {searchInput.map((country, index) => (
                <CountryContainer
                  key={index}
                  onClick={() => setCountryName(country.name.common)}
                >
                  <img src={country.flags.png} alt="" />
                  <p>{country.name.common}</p>
                </CountryContainer>
              ))}
            </DataContainer>
          ) : (
            <Message>
              <p>Search where are you going</p>
            </Message>
          )}
        </>
      ) : (
        <Message>
          <p>Search where are you going</p>
        </Message>
      )}
      {input.length > 0 && countryName && (
        <p
          style={{
            marginTop: "5px",
            marginBottom: "10px",
            paddingBottom: "10px",
            fontWeight: "550",
          }}
        >
          {countryName}
        </p>
      )}
    </Container>
  );
};

export default SearchBox;

const Container = styled.div`
  width: 40%;
  height: 500px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  overflow-y: hidden;
  input {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid lightgray;
    padding: 8px;
    margin-top: 30px;
    font-size: medium;
  }
  P {
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    margin-top: -20px;
    width: 90%;
  }
`;
const DataContainer = styled.div`
  overflow-y: scroll;
  height: 80%;
  margin-top: 10px;
`;
const CountryContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 5px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  img {
    width: 30px;
    margin-right: 10px;
  }
  :hover {
    background-color: lightgray;
  }
  @media screen and (max-width: 350px) {
    img {
      width: 20px;
    }
    p {
      font-size: 13px;
    }
  }
`;
const Message = styled.div`
  display: flex;
  padding: 15px 0px;
  margin-top: 100px !important;
  text-align: center;
  margin: auto 0px;
  justify-content: center;
  p {
    font-size: 15px;
    font-weight: 500;
    color: gray;
  }
`;
const CloseIcon = styled(Close)`
  border: 2px solid black;
  border-radius: 100%;
  position: absolute;
  right: 20px;
  cursor: pointer;
  z-index: 100;
  font-size: 25px !important;
  z-index: 100;
  font-weight: bolder !important;
`;
