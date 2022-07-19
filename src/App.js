import React, { useState } from "react";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import ResultsPage from "./pages/ResultsPage";
import DefaultPage from "./pages/DefaultPage";
function App() {
  const [animation, setAnimation] = useState(false);
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path={"/result"}>
            <Wrapper>
              <ResultsPage />
            </Wrapper>
          </Route>
          <Route exact path={"/search"}>
            <Wrapper>
              <Search />
            </Wrapper>
          </Route>
          <Route exact path="/">
            <Wrapper>
              <Header animation={animation} setAnimation={setAnimation} />
              <HomePage />
            </Wrapper>
          </Route>
          <Route path="*">
            <DefaultPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div``;
const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
