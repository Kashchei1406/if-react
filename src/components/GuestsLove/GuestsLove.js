import React from "react";
import MainSection from "../MainSection/MainSection";
import data from "../../assets/constants/data";

function GuestsLove() {
  return (
    <MainSection title="Home guests loves" classes="guests-loves" data={data} />
  );
}

export default GuestsLove;
