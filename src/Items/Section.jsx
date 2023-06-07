import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {RightContainerButton, SliderContainer, RightSliderContainer,LeftSliderContainer,InsideSliderContainer} from "../Style/SectionDesign";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />
  
};

function Section() {
  return (
    <SliderContainer>
      <Slider {...settings}>
        
        <InsideSliderContainer>
          <LeftSliderContainer>Hello World</LeftSliderContainer>
          <RightSliderContainer>
            
            
              {/* <h1>Arch Design Studio</h1>
              <p>A Very Personal Approach to Every Client</p>
              <p>Elegant Solution to Complex Problems</p> */}
              <RightContainerButton>GET STARTED</RightContainerButton>
              
              
          </RightSliderContainer>
        </InsideSliderContainer>
        <InsideSliderContainer>
          <LeftSliderContainer>Hello World</LeftSliderContainer>
          <RightSliderContainer>
            
            
              {/* <h1>Arch Design Studio</h1>
              <p>A Very Personal Approach to Every Client</p>
              <p>Elegant Solution to Complex Problems</p> */}
              <RightContainerButton>GET STARTED</RightContainerButton>
              
              
          </RightSliderContainer>
        </InsideSliderContainer>

        {/* <div>Hello</div> */}
      </Slider>
    </SliderContainer>
  );
}

export default Section;
