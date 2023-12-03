import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Images/slider1.png";
import slider4 from "../../Images/slider4.png";
import prod3 from "../../Images/prod3.png";
import prod4 from "../../Images/prod4.png";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const handelSelect = (selectIndex) => {
    setIndex(selectIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handelSelect} style={{width:'100%'}}>
      <Carousel.Item className="slider-background1" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center  " >
          <img
            style={{ height: "296px", width: "313.53px" }}
            className="d-block w-45"
            src={slider1}
            alt="First slide"
          />
          <div className=" ">
            <h3 className="slider-title"> هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل 50%عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background2" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313.53px" }}
            className="d-block w-45 "
            src={slider4}
            alt="Second slide"
          />
          <div className="">
            <h3 className="slider-title"> هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل 50%عند شرائك</p>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-background3" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313.53px" }}
            className="d-block w-45"
            src={prod3}
            alt="Third slide"
          />
          <div className="">
            <h3 className="slider-title"> هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل 50%عند شرائك</p>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-background4" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313.53px" }}
            className="d-block w-45"
            src={prod4}
            alt="Third slide"
          />
          <div className="">
            <h3 className="slider-title"> هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل 50%عند شرائك</p>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;
