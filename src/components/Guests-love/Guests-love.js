import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";
import data from "../../constants/data";
import "../../assets/styles/style.css";
import ButtonNext from "../Buttons/ButtonNext";
import ButtonPrev from "../Buttons/ButtonPrev";

function GuestsLove() {
  return (
    <section className={"guests-loves"}>
      <div className={"container"}>
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
          <ButtonPrev />
          <ButtonNext />
        </div>
      </div>
    </section>
  );
}

export default GuestsLove;
