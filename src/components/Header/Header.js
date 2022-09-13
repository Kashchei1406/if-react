import React, { useState } from "react";
import Container from "../Container/Container";
import background from "../../assets/images/background.png";
import icons from "../../assets/images/icons.svg";
import googleApp from "../../assets/images/google.svg";
import appStore from "../../assets/images/apple.svg";
import SearchForm from "../SearchForm/SearchForm";
import MainSection from "../MainSection/MainSection";
import data from "../../assets/constants/data";

function Header() {
  const [result, setResult] = useState([]);

  const filterResult = (country) => {
    if (country) {
      const filteredHotels = data.filter(
        (item) =>
          item.country.toLowerCase().includes(country.toLowerCase()) ||
          item.name.toLowerCase().includes(country.toLowerCase())
      );
      setResult(filteredHotels);
      !filteredHotels && alert("Sorry, we can`t find this place, try again");
    }
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
          <SearchForm getCountry={filterResult} />
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
      {!!result.length && (
        <MainSection
          title="Available Hotel"
          data={result}
          classes="available-hotels"
        />
      )}
    </>
  );
}

export default Header;
