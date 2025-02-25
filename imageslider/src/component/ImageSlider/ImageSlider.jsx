import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const ImageSlider = ({data}) => {
  const [imageIndex, setImageIndex] = useState(0);
  let interval = "";

  useEffect(() => {
    interval = setInterval(() => {
      showNextImage();
    }, 2500);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return data.length - 1;
      return index - 1;
    });

    clearInterval(interval);
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === data.length - 1) return 0;
      return index + 1;
    });
    clearInterval(interval);
  };

  return (
    <div className="image-slider-container">
      <div className="slider-container">
        <div className="img-container">
          {data.map((img, index) => (
            <img
              src={img.image}
              key={index}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button className="img-slide-btn prev" onClick={showPrevImage}>
          <MdArrowBackIos className="icon" />
        </button>
        <button className="img-slide-btn next" onClick={showNextImage}>
          <MdArrowForwardIos className="icon" />
        </button>
      </div>
      <div className="slider-dot-container">
        {data.map((__, index) => (
          <div
            key={index}
            className="dot-progress"
            style={{ width: index === imageIndex ? "4rem" : "2rem" }}
          >
            <div
              className="dot-fill-bar"
              style={{
                animation:
                  index === imageIndex
                    ? "dotslide 2.5s ease-in-out forwards"
                    : "none",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
