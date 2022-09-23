import React, { useEffect, useState } from "react";
import MainSection from "../MainSection/MainSection";
import { popularUrl } from "../../assets/constants/api";

function GuestsLove() {
  const [popularHotels, setPopularHotels] = useState({
    hotels: [],
    isLoaded: false,
  });

  useEffect(() => {
    fetch(popularUrl)
      .then((response) => response.json())
      .then((array) =>
        setPopularHotels({ ...popularHotels, hotels: array, isLoaded: true })
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <MainSection
      title="Home guests loves"
      classes="guests-loves"
      data={popularHotels.hotels}
      isLoad={popularHotels.isLoaded}
    />
  );
}

export default GuestsLove;
