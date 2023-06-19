import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {RightContainerButton, SliderContainer, RightSliderContainer,LeftSectionImage, LeftSliderContainer,InsideSliderContainer,Heading,RightSubHead,RightSubHeadSecond,RightSliderInner,/*CardContainer*/} from "../Style/SectionDesign";
// import { Card } from '../CardInfo';
// import Tabs from "../Components/Tabs";

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
          <LeftSliderContainer><LeftSectionImage src="/Images/sliderImage.jpg" /></LeftSliderContainer>
          <RightSliderContainer>
            
              <RightSliderInner>              
              <Heading>Arch Design Studio</Heading>
              <RightSubHead>A Very Personal Approach to Every Client</RightSubHead>
              <RightSubHeadSecond>Elegant Solution to Complex Problems</RightSubHeadSecond>
              {/* <ButtonContainer> */}
              <RightContainerButton>GET STARTED</RightContainerButton>
              {/* </ButtonContainer> */}
              </RightSliderInner>

              
          </RightSliderContainer>
          {/* <CardContainer>
          <Tabs CardImage={Card[0].img}
                Cardtitle={Card[0].title}
                CardDescription={Card[0].describe}

      /> */}
      {/* <Tabs CardImage={Card[1].img}
                Cardtitle={Card[1].title}
                CardDescription={Card[1].describe}

      />
      <Tabs CardImage={Card[2].img}
                Cardtitle={Card[2].title}
                CardDescription={Card[2].describe}

      />
      </CardContainer> */}


        </InsideSliderContainer>
       
        <div>Hello</div>
      </Slider>
    </SliderContainer>
  );
}

export default Section;
