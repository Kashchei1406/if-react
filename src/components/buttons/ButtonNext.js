import React from "react";

function ButtonNext() {
  return (
    <button
      className="carousel__btn carousel__btn--next"
      id="btn-next"
      type="button"
    >
      <img
        className="carousel__btn-img carousel__btn-img--next"
        src="../../images/arrow.png"
        alt="arrow"
      />
    </button>
  );
}

export default ButtonNext;
