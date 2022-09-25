import React, { useState } from "react";

function SearchForm({ getCountry }) {
  const [country, setCountry] = useState("");

  const searchCountry = (event) => {
    event.preventDefault();
    getCountry(country);
    setCountry("");
  };

  return (
    <form
      className="form col-12"
      id="main-form"
      method="GET"
      onSubmit={(event) => searchCountry(event)}
    >
      <div className="form__item form__item-hotel">
        <span className="form__label form__label-hotel">
          Your destination or hotel name
        </span>
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          id="input-hotel"
          className="form__input-txt"
          type="text"
          placeholder="New York"
          required
        />
      </div>
      <div className="form__item form__item-date">
        <div className="form__label form__label-date">
          <span className="form__label form__label-date-in">Check - in</span>
          <span className="form__mdash">&mdash;</span>
          <span className="form__label form__label-date-out">Check - out</span>
        </div>
        <div className="form__date">
          <span> 15 sept 2022</span>
          <span className="form__mdash">&mdash;</span>
          <span> 18 sept 2022</span>
        </div>
      </div>
      <div
        id="amount"
        className="form__item form__item-amount col-md-12"
        data-path="main-amount"
      >
        <p>
          <span className="adults-count">0</span> Adults &mdash;
          <span className="children-count"> 0</span> Children &mdash;
          <span className="rooms-count"> 0</span> Room
        </p>
      </div>
      <div className="form__btn-wrapper">
        <button className="form__btn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
