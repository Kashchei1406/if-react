import React, { useState } from "react";
import Container from "../Container/Container";
import background from "../../assets/images/background.png";
import icons from "../../assets/images/icons.svg";
import googleApp from "../../assets/images/google.svg";
import appStore from "../../assets/images/apple.svg";
import SearchForm from "../SearchForm/SearchForm";
import MainSection from "../MainSection/MainSection";
import { searchUrl } from "../../assets/constants/api";

function Header() {
  const [searchHotels, setSearchHotels] = useState({
    hotels: [],
    isLoaded: true,
  });

  const getHotels = async (country) => {
    if (country) {
      setSearchHotels({ ...searchHotels, isLoaded: false });

      try {
        const response = await fetch(`${searchUrl}${country}`);
        const result = await response.json();

        if (result.length) {
          setSearchHotels({
            ...searchHotels,
            hotels: [...result],
            isLoaded: true,
          });
        } else {
          alert("Sorry we did not find any hotels, try again");
          setSearchHotels({
            ...searchHotels,
            hotels: [],
            isLoaded: true,
          });
        }
      } catch (error) {
        console.error(error);
      }

      return;
    }

    alert("Fill out form");
  };

  return (
    <>
      <header
        className="header"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Container>
          <div className="header__head col-12">
            <svg className="header__logo col-2">
              <use href={`${icons}#logo`} />
            </svg>
            <ul className="nav">
              <li className="nav__item nav__item--txt">
                <a className="nav__link" href="/">
                  Stays
                </a>
              </li>
              <li className="nav__item  nav__item--txt">
                <a className="nav__link" href="/">
                  Attraction
                </a>
              </li>
              <li className="nav__item nav__item--svg">
                <a className="nav__link nav__link--svg" href="/">
                  <svg className="nav__item-night nav__svg">
                    <use href={`${icons}#night`} />
                  </svg>
                </a>
              </li>
              <li className="nav__item nav__item--svg">
                <a className="nav__link nav__link--svg" href="/">
                  <svg className="nav__item-account nav__svg">
                    <use href={`${icons}#account`} />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <h1 className="header__title col-12">
            Discover stays
            <br />
            to live, work or just relax
          </h1>
          <SearchForm getCountry={getHotels} />
          <div className="header__apps col-12">
            <div className="header__apps-item">
              <img src={googleApp} alt="Logo Google store" />
            </div>
            <div className="header__apps-item">
              <img src={appStore} alt="Logo App store" />
            </div>
          </div>
        </Container>
      </header>
      {!!searchHotels.hotels.length && (
        <MainSection
          title="Available Hotel"
          classes="available-hotels"
          data={searchHotels.hotels}
          isLoad={searchHotels.isLoaded}
        />
      )}
    </>
  );
}

export default Header;
