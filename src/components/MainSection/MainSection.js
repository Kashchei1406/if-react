import React from "react";
import Container from "../Container/Container";
import Carousel from "../Caruosel/Carousel";
import Title from "../Title/Title";

function MainSection({ title, classes, data, isLoad }) {
  return (
    <section className={classes}>
      <Title name={title} />
      <Container>
        <Carousel data={data} isLoaded={isLoad} />
      </Container>
    </section>
  );
}

export default MainSection;
