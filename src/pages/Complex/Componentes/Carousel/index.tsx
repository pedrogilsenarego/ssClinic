import {
  CarouselProvider,
  Dot,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState } from "react";

const Carousel = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(0);

  const height = `calc(100vh - 330px)`;
  const slides = [
    {
      img: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
    {
      img: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
    {
      img: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
    {
      img: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
  ];

  return (
    <div style={{ position: "relative", height }}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        currentSlide={sliderPosition}
        totalSlides={4}
        touchEnabled
        lockOnWindowScroll
        //infinite
        visibleSlides={1}
      >
        <Slider>
          <Slide index={0}>
            <img
              alt=""
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
              style={{ height, objectFit: "cover", width: "100%" }}
            />
          </Slide>
          <Slide index={1}>
            <img
              alt=""
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
              style={{ height, objectFit: "cover", width: "100%" }}
            />
          </Slide>
          <Slide index={2}>
            <img
              alt=""
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
              style={{ height, objectFit: "cover", width: "100%" }}
            />
          </Slide>
          <Slide index={3}>
            <img
              alt=""
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
              style={{ height, objectFit: "cover", width: "100%" }}
            />
          </Slide>
        </Slider>

        <div
          style={{
            position: "absolute",
            bottom: 30,

            left: "50%",
            display: "flex",
            columnGap: "10px",
          }}
        >
          {slides.map((dot, index) => {
            return (
              <div
                onClick={() => setSliderPosition(index)}
                key={index}
                style={{
                  width: "10px",
                  height: "10px",
                  cursor: "pointer",
                  borderRadius: "50%",
                  backgroundColor: sliderPosition === index ? "black" : "grey",
                }}
              ></div>
            );
          })}
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Carousel;
