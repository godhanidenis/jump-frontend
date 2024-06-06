import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../Assets/Logo 6.png";
import image2 from "../../Assets/Logo 7.png";
import image3 from "../../Assets/Logo 8.png";
import image4 from "../../Assets/Logo 9.png";
import image5 from "../../Assets/Mask group (1).png";
import image6 from "../../Assets/Mask group (2).png";
import image7 from "../../Assets/Mask group.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1140 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1140, min: 1023 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1023, min: 536 },
    items: 5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 536, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

const LogoCarousel = () => {
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const CustomLeftButton = () => {
    return (
      <div className="absolute top-[15%] flex left-1 z-10">
        <ArrowBackIosIcon
          onClick={prevSlide}
          className="cursor-pointer text-[#f7cb6b]"
        />
      </div>
    );
  };
  const CustomRightButton = () => {
    return (
      <div className="absolute right-1 top-[15%] flex z-10">
        <ArrowForwardIosIcon
          onClick={nextSlide}
          className="cursor-pointer text-[#f7cb6b]"
        />
      </div>
    );
  };

  return (
    <div className="mt-[32.5px] w-full">
      <span
        className="text-[#fff] w-full flex items-center justify-center text-[25px] not-italic font-normal leading-[35px]"
        style={{
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        Brands We’ve Hyper-Scaled:
      </span>
      <div className="w-full relative mt-10">
        <CustomLeftButton />
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          customTransition="all .5s ease-in-out"
          itemClass="flex justify-center"
          arrows={false}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          pauseOnHover
          shouldResetAutoplay={false}
        >
          {[image1, image2, image3, image4, image5, image6, image7]?.map(
            (itm, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-16 h-8"
              >
                <img src={itm} alt="logos" className="w-full h-full" />
              </div>
            )
          )}
        </Carousel>
        <CustomRightButton />
      </div>
    </div>
  );
};

export default LogoCarousel;
