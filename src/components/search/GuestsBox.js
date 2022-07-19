import React from "react";
import styled from "styled-components";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";

const GuestsBox = ({
  Five,
  adults,
  setAdults,
  kids,
  setKids,
  pets,
  setPets,
  totalLimits,
  totalGuests,
  totalPetsLimit,
}) => {
  function AddAdults() {
    if (adults >= 0 && adults < totalLimits) {
      setAdults(adults + 1);
    }
  }
  function RemoveAdults() {
    if (adults > 0) {
      setAdults(adults - 1);
    } else {
      setAdults(0);
    }
  }

  function AddKids() {
    if (kids >= 0 && kids < totalLimits) {
      setKids(kids + 1);
    }
  }
  function RemoveKids() {
    if (kids > 0) {
      setKids(kids - 1);
    } else {
      setKids(0);
    }
  }

  function AddPets() {
    if (pets >= 0 && pets < totalPetsLimit) {
      setPets(pets + 1);
    }
  }
  function RemovePets() {
    if (pets > 0) {
      setPets(pets - 1);
    } else {
      setPets(0);
    }
  }
  return (
    <Container>
      <CloseIcon onClick={Five} />
      <Wrapper>
        <Wrap>
          <p>
            Adults <span>Ages 13 or above</span>
          </p>
          <Box>
            <Button>
              <RemoveButton onClick={RemoveAdults} />
            </Button>
            <p>{adults}</p>
            <Button>
              {totalGuests < totalLimits ? (
                <AddButton onClick={AddAdults} />
              ) : (
                <AddButton style={{ cursor: "not-allowed" }} />
              )}
            </Button>
          </Box>
        </Wrap>
        <Wrap>
          <p>
            Kids <span>Ages 2–12</span>
          </p>
          <Box>
            <Button>
              <RemoveButton onClick={RemoveKids} />
            </Button>
            <p>{kids}</p>
            <Button>
              {totalGuests < totalLimits ? (
                <AddButton onClick={AddKids} />
              ) : (
                <AddButton style={{ cursor: "not-allowed" }} />
              )}
            </Button>
          </Box>
        </Wrap>
        <Wrap>
          <p>
            Pets <span>1-5</span>
          </p>
          <Box>
            <Button>
              <RemoveButton onClick={RemovePets} />
            </Button>
            <p>{pets}</p>
            <Button>
              {totalGuests < totalLimits ? (
                <AddButton onClick={AddPets} />
              ) : (
                <AddButton style={{ cursor: "not-allowed" }} />
              )}
            </Button>
          </Box>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default GuestsBox;

const Container = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 50%;
  position: relative;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
const Wrapper = styled.div`
  padding: 20px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
  p {
    font-weight: 550;
    font-size: 20px;
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 14px;
    color: gray;
    font-weight: normal;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0px;

  p {
    margin: 0px 15px !important;
    font-size: 25px;
    font-weight: 500;
    padding: 0px 5px;
  }
`;
const AddButton = styled(AddCircleOutlineRoundedIcon)`
  font-size: 30px !important;
`;
const RemoveButton = styled(RemoveCircleOutlineRoundedIcon)`
  font-size: 30px !important;
`;

const Button = styled(IconButton)``;

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
