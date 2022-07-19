import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import styled from "styled-components";
import { Close } from "@mui/icons-material";

const CheckinBox = ({ Five, checkInDate, setCheckInDate }) => {
  function handleCange(date) {
    setCheckInDate(date);
  }
  return (
    <Container>
      <CloseIcon onClick={Five} />
      <p>Check in date</p>
      <span>{checkInDate.toDateString()}</span>
      <DatePicker>
        <Calendar
          date={checkInDate}
          color="#ff385c "
          onChange={handleCange}
        ></Calendar>
      </DatePicker>
    </Container>
  );
};

export default CheckinBox;

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
