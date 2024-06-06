import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
 
import 'swiper/css/pagination';
import 'swiper/css';

 

const LogoCarousel = () => {
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

      {/* <div className="swiper-container">
        <Swiper
          spaceBetween={1}
          slidesPerView={5}
          centeredSlides={true}
          roundLengths={true}
          loop={true}
          loopAdditionalSlides={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div> */}
    </div>
  );
};

export default LogoCarousel;
