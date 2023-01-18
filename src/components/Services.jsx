import React from "react";
import "../style/Services.scss";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="servises">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1200}
        showThumbs={false}
        showIndicators={false}
        emulateTouch={true}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="txt">React.js Developer</p>
        </div>
        <div>
          <img src={img2} alt="item1" />
          <p className="txt">24*7 Support</p>
        </div>
      </Carousel>
      <div className="line"></div>
    </div>
  );
};

export default Services;
