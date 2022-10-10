import React from "react";
import "../../assets/styles/scss/index.scss";
import Header from "../Header/Header";
import GuestsLove from "../GuestsLove/GuestsLove";
import Calendar from "../Calendar/Calendar";

function App() {
  return (
    <>
      <Header />
      <GuestsLove />
      <Calendar />
    </>
  );
}

export default App;
