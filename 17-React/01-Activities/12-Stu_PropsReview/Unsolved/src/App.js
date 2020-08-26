import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
import DavidHasselhoff from "./components/DavidHasselhoff";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <SpongeBobCard />
      <MrKrabsCard />
      <SquidwardCard />
      <DavidCard />
    </Wrapper>
  );
}

export default App;
