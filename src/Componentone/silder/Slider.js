import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../asset/Slider1.jpg";
import Slider2 from "../../asset/Slider2.jpg";

import Slider from "react-slick";
function ShowSlider() {
  return (
    <div className="container container8">
      <div className="row">
        <h2 className="sliderh2">TROOPERS</h2>
      </div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-10">
          <Carousel variant="dark">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 sliderimage"
                src={Slider1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 sliderimage"
                src={Slider2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ShowSlider;
