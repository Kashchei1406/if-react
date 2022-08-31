import React from "react";
import Container from "../Container/Container";
import "../../assets/styles/scss/common/common.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__head col-12">
          <div className="col-1">
            <svg className="header__logo">
              <use href="./images/icons.svg#logo" />
            </svg>
          </div>
          <ul className="nav">
            <li className="nav__item">
              <a className="nav__link" href="/">
                Stays
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/">
                Attraction
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/">
                <svg className="nav__item-night">
                  <use href="./images/icons.svg#night" />
                </svg>
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/">
                <svg className="nav__item-account">
                  <use href="./images/icons.svg#account" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}

export default Header;
