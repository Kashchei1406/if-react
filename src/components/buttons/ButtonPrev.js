import React from "react";

function ButtonPrev() {
  return (
    <button
      className="carousel__btn _invisible carousel__btn--prev"
      id="btn-prev"
      type="button"
    >
      <img
        className="carousel__btn-img carousel__btn-img--prev"
        src="../../images/arrow.svg"
        alt="arrow"
      />
    </button>
  );
}

export default ButtonPrev;
