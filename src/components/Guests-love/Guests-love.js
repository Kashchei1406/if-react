import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";
import data from "../../constants/data";
import CarouselBtn from "../Buttons/Carousel-btn";
import Container from "../Container/Container";

function GuestsLove() {
  return (
    <section className={"guests-loves"}>
      <Container>
        <Title name={"Home guests Love"} />
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
          <CarouselBtn classes={"btn--next"} id={"guests-love__btn--next"} />
        </div>
      </Container>
    </section>
  );
}

export default GuestsLove;
