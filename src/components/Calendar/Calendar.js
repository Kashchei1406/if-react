import React, { useEffect, useState } from "react";
import MONTHS from "../../assets/constants/calendar";
import CalendarBtn from "../UI/CalendarBtn/CalendarBtn";

function Calendar() {
  const fullDate = new Date();
  const [date, setDate] = useState({
    day: 1,
    month: 0,
    year: 2022,
    prevDays: [],
    days: [],
  });

  const setDaysOfMonth = (date3) => {
    const days = [];
    const lastDay = new Date(
      date3.getFullYear(),
      date3.getMonth() + 1,
      0
    ).getDate();

    for (let i = 1; i <= lastDay; i += 1) {
      days.push(i);
    }

    return days;
  };

  const getNumberOfFirstDay = (date2) => {
    return new Date(date2.getFullYear(), date2.getMonth(), 1).getDay();
  };

  const getDaysOfPrevMonth = (date2) => {
    const prevDays = [];

    for (let i = 1; i < getNumberOfFirstDay(date2); i += 1) {
      prevDays.push("");
    }

    return prevDays;
  };

  function setState(date1 = fullDate) {
    const currentDay = date1.getDate();
    const numberOfMonth = date1.getMonth();
    const currentYear = date1.getFullYear();
    const daysInMonth = setDaysOfMonth(date1);
    const daysOfPrevMonth = getDaysOfPrevMonth(date1);

    setDate({
      ...date,
      day: currentDay,
      month: numberOfMonth,
      year: currentYear,
      days: [...daysInMonth],
      prevDays: [...daysOfPrevMonth],
    });
  }

  useEffect(() => setState(fullDate), []);

  const nextMonth = () => {
    setDate({
      ...date,
      month: date.month + 1,
    });
    if (date.month === 11) {
      setState(new Date());
    }
    setState(new Date(date.year, date.month + 1));
  };

  const prevMonth = () => {
    fullDate.setMonth(date.month - 1, 1);
    setState(fullDate);
  };

  return (
    <div className="calendar">
      <div className="calendar__head">
        <CalendarBtn classes="prev" func={prevMonth} />
        <h5 className="calendar__month">{`${MONTHS[date.month]} ${
          date.year
        }`}</h5>
        <CalendarBtn classes="next" func={nextMonth} />
      </div>
      <div className="calendar__days">Mo</div>
      <div className="calendar__days">Tu</div>
      <div className="calendar__days">We</div>
      <div className="calendar__days">Th</div>
      <div className="calendar__days">Fr</div>
      <div className="calendar__days">Sa</div>
      <div className="calendar__days">Su</div>

      {date.prevDays.length !== 0 &&
        date.prevDays.map((item) => (
          <div className="calendar__date">{item}</div>
        ))}
      {date.days.map((item) => (
        <div
          key={`${item}.${date.month + 1}`}
          id={`${item}.${date.month + 1}.${date.year}`}
          className="calendar__date"
          role={"button"}
          tabIndex={0}
          onClick={(event) => console.log(event.target.id)}
          onKeyDown={(event) => console.log(event.target.id)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
