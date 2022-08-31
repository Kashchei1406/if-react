import React from "react";

function CarouselBtn({ classes, id }) {
  return (
    <button
      className={`carousel__btn carousel__${classes}`}
      id={id}
      type="button"
    >
      <img
        className={`carousel__img-btn carousel__img-${classes}`}
        src="./images/arrow.svg"
        alt="arrow"
      />
    </button>
  );
}

export default CarouselBtn;
