import React from "react";
import "../../assets/styles/scss/index.scss";
import Header from "../Header/Header";
import GuestsLove from "../GuestsLove/GuestsLove";
import MainSection from "../MainSection/MainSection";
import data from "../../assets/constants/data";

function App() {
  return (
    <>
      <Header />
      <GuestsLove />
      <MainSection title="Availabel Hotels" data={data} />
    </>
  );
}

export default App;
