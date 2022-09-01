import React from "react";
import arrow from "../../assets/images/arrow.svg";

function CarouselBtn({ classes, id }) {
  return (
    <button
      className={`carousel__btn carousel__${classes}`}
      id={id}
      type="button"
    >
      <img
        className={`carousel__img-btn carousel__img-${classes}`}
        src={arrow}
        alt="arrow"
      />
    </button>
  );
}

export default CarouselBtn;
