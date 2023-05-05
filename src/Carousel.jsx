import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: require("./Media/example1.svg"),
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
      icon: require("./Media/example2.svg"),
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: require("./Media/example3.svg"),
    },
  ];
  const updateIndex = (newIndex) => {
      if (newIndex < 0) {
        newIndex = items.length - 1;
      } else if (newIndex >= items.length) {
        newIndex = 0;
      }

      setActiveIndex(newIndex);
    },
    handlePrevClick = () => {
      setActiveIndex((activeIndex - 1 + items.length) % items.length);
    },
    handleNextClick = () => {
      setActiveIndex((activeIndex + 1) % items.length);
    };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button className="button-arrow" onClick={handlePrevClick}>
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className={
                  `${index === activeIndex ? "active" : ""}` +
                  "indicator-buttons"
                }
                onClick={() => {
                  updateIndex(index);
                }}
                style={{
                  transform: `translateX(${(index - activeIndex) * 30}%)`,
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  x
                </span>
              </button>
            );
          })}
        </div>
        <button className="button-arrow" onClick={handleNextClick}>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
