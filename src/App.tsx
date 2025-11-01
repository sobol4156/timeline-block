import React from "react";
import TimelineBlock from "./components/TimelineBlock";
import { FontStyles } from "./styles/fonts";
import { GlobalStyles, Container } from "./styles/global";

const App = () => {
  return (
    <Container>
      <FontStyles />
      <GlobalStyles />
      <TimelineBlock />
    </Container>
  );
};

export default App;