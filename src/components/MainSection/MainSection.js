import React from "react";
import Container from "../Container/Container";
import Carousel from "../Caruosel/Carousel";
import Title from "../Title/Title";

function MainSection({ title, classes, data }) {
  return (
    <section className={classes}>
      <Title name={title} />
      <Container>
        <Carousel data={data} />
      </Container>
    </section>
  );
}

export default MainSection;
