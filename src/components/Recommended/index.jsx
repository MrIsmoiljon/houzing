import React from "react";
import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../Card";
import { ArrowLeft, ArrowRight, Carousel, Container, Wrapper } from "./style";

const Recommended = () => {
  const slider = useRef();

  const items = [
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
  ];
  return (
    <Container>
      <div className="title center">Recommended</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Carousel>
          <AliceCarousel
            arrows={false}
            mouseTracking
            ref={slider}
            autoWidth
            items={items}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Recommended;
