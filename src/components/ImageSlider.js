import React from "react";
import { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteButton from "../components/WhiteButton";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let result = slides.find((slide) => slide.id === currentIndex);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const scrollHandler = () => window.scrollTo({ top: 420, behavior: "smooth" });

  return (
    <div className="image-wrapper">
      <button onClick={goToPrevious} className="arrow arrow-left">
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="2xl"
          style={{ color: "white" }}
        />
      </button>

      <div
        className={result.class}
        style={{ backgroundImage: `url("${result.url}")` }}
      ></div>

      <div className="slider-button" onClick={scrollHandler}>
        <WhiteButton link={result.link} text={"Discover More"} />
      </div>
      <div className="dots-container">
        {slides.map((slide, index) => (
          <div className="dot" key={index} onClick={() => goToSlide(index)}>
            <FontAwesomeIcon
              className={index === currentIndex ? "current" : "grey"}
              icon={faCircle}
              size="2xs"
            />
          </div>
        ))}
      </div>

      <button onClick={goToNext} className="arrow arrow-right">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2xl"
          style={{ color: "white" }}
        />
      </button>
    </div>
  );
};

export default ImageSlider;
