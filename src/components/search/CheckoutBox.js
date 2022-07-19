import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import styled from "styled-components";
import { Close } from "@mui/icons-material";

const CheckoutBox = ({ Five, setCheckOutDate, checkOutDate }) => {
  function handleCange(date) {
    setCheckOutDate(date);
  }
  return (
    <Container>
      <CloseIcon onClick={Five} />
      <p>Check out date</p>
      <span>{checkOutDate.toDateString()}</span>

      <DatePicker>
        <Calendar
          date={checkOutDate}
          color="#ff385c "
          onChange={handleCange}
        ></Calendar>
      </DatePicker>
    </Container>
  );
};

export default CheckoutBox;
const Container = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  transition-duration: 800ms;
  position: relative;
  p {
    font-weight: 550;
  }
  span {
    margin: 5px 0px;
    font-size: small;
    color: gray;
    font-weight: 500;
  }
`;
const DatePicker = styled.div`
  margin-top: 10px !important;
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
