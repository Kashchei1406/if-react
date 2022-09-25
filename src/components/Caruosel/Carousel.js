import React from "react";
import Card from "../Card/Card";
import CarouselBtn from "../Buttons/Carousel-btn";
import Loader from "../UI/Loader/Loader";

function Carousel({ data, isLoaded }) {
  return (
    <div className={"carousel"}>
      <div className={"carousel__container"}>
        {isLoaded ? (
          <div className={"row-container"} style={{ opacity: 1 }}>
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
        ) : (
          <Loader />
        )}
      </div>
      <CarouselBtn
        classes={"btn--prev _invisible"}
        id={"guests-love__btn--prev"}
      />
      <CarouselBtn
        classes={`btn--next ${!isLoaded && "_invisible"}`}
        id={"guests-love__btn--next"}
        display={data.length <= 3 && "hide"}
      />
    </div>
  );
}

export default Carousel;
