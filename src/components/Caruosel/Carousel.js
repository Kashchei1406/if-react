import React from "react";
import Card from "../Card/Card";
import CarouselBtn from "../Buttons/Carousel-btn";

function Carousel({ data }) {
  return (
    <div className={"carousel"}>
      <div className={"carousel__container"}>
        <div className={"row-container"}>
          {data.map((item) => (
            <Card
              imageUrl={item.imageUrl}
              name={item.name}
              city={item.city}
              country={item.country}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <CarouselBtn
        classes={"btn--prev _invisible"}
        id={"guests-love__btn--prev"}
      />
      <CarouselBtn
        classes={"btn--next"}
        id={"guests-love__btn--next"}
        display={data.length <= 3 && "hide"}
      />
    </div>
  );
}

export default Carousel;
