import React from "react";

function Card(props) {
  const { id, name, imageUrl, country, city } = props;

  return (
    <div data-id={id} className="card-primary col-3 col-md-6">
      <div className="card-primary__img-wrapper">
        <img className={"card-primary__img"} alt={name} src={imageUrl} />
      </div>
      <div className="card-primary__text">
        <a className={"card-primary__text-item"} href="/">
          {name}
        </a>
        <a
          className={"card-primary__text-item card-primary__text-item--gray"}
          href="/"
        >
          {city}, {country}
        </a>
      </div>
    </div>
  );
}

export default Card;
