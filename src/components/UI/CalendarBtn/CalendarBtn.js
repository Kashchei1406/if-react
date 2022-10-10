import React from "react";
import secondaryArrow from "../../../assets/images/secondary-arrow.svg";

function CalendarBtn({ classes, func }) {
  return (
    <button
      className={`calendar__btn calendar__btn--${classes}`}
      type="button"
      onClick={() => func()}
    >
      <img
        className={`calendar__btn-img calendar__btn-img--${classes}`}
        src={secondaryArrow}
        alt="arrow"
      />
    </button>
  );
}

export default CalendarBtn;
