import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <Container>
      <Wrapper to={"/"}>
        <p>Go To Home Page</p>
      </Wrapper>
    </Container>
  );
};

export default DefaultPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const Wrapper = styled(Link)`
  border: 1px solid lightgray;
  padding: 10px 20px;
  background-color: #ff385c;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;
