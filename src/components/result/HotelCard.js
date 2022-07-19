import React, { useState } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HotelCard = ({
  image,
  location,
  adults,
  kids,
  pets,
  firstDate,
  lastDate,
  newLocation,
}) => {
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <Container>
      <img src={image} alt="" />
      <Details>
        {location ? (
          <div>{`Privete room in center of ${location}`}</div>
        ) : (
          <div>{`Privete room in center of ${newLocation}`}</div>
        )}

        <p>
          {firstDate} to {lastDate}
        </p>
        <h2>Random hotel name</h2>
        <GuestInfo>
          {adults} adult - {kids} kid - {pets} pet - bedroom - kitchen -
          bathroom - wi-fi - free praking
        </GuestInfo>
        <RatingPart>
          <RatingBar
            name="half-rating"
            precision={0.5}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <h2>{rating}</h2>
        </RatingPart>
      </Details>
      <RightPart>
        <Icon>
          {liked ? (
            <HeartFillIcon onClick={() => setLiked(false)} />
          ) : (
            <HeartIcon onClick={() => setLiked(true)} />
          )}
        </Icon>
        <Price>
          <h2>$ 50 / night</h2>
          <h4>total 200 $ </h4>
        </Price>
      </RightPart>
    </Container>
  );
};
export default HotelCard;

const Container = styled.div`
  display: flex;
  padding: 20px 30px;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 5px;
  img {
    width: 300px;
    border-radius: 10px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 350px) {
    img {
      width: 250px;
    }
  }
`;
const Details = styled.div`
  margin-left: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  color: gray !important;

  h2 {
    font-weight: normal;
    font-size: 25px;
    color: black;
  }
  p {
    font-size: 12px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-left: 0px;
    h2 {
      margin: 5px 0px;
    }
    p {
      margin: 10px 0px;
    }
  }
`;
const GuestInfo = styled.p`
  color: gray;
  text-transform: capitalize;
  font-size: 18px !important;
`;
const RatingBar = styled(Rating)`
  color: #ff385c !important;
  margin-right: 10px !important;
`;
const HeartIcon = styled(FavoriteBorderIcon)`
  cursor: pointer !important;
  font-size: 30px !important;
`;
const HeartFillIcon = styled(FavoriteIcon)`
  color: #ff385c !important;
  font-size: 30px !important;

  cursor: pointer !important;
`;
const Icon = styled.div``;
const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    margin-top: 10px;
  }
`;
const Price = styled.div`
  text-align: center;
  h2 {
    font-weight: 500;
    margin-bottom: 5px;
  }
  h4 {
    font-weight: 500;
  }
`;
const RatingPart = styled.div`
  display: flex;
  align-items: center;
`;
