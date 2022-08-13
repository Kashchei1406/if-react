import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";
import data from "../../js/data";
import "../../styles/style.css";

function GuestsLove() {
  return (
    <section className={"guests-loves"}>
      <div className={"container"}>
        <Title name={"Home guests Love"} />
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
    </section>
  );
}

export default GuestsLove;
