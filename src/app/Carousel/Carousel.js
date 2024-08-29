"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { navigation, pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "./carousel.css";
export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      navigation
      //   pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="card-box-div">Slide 1</div>
        <div className="card-box-content">
          <p>3-Bed</p>
          <p> 977 sq. ft.</p>
          <p>3.10cr</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-box-div">Slide 1</div>
        <div className="card-box-content">
          <p>3-Bed</p>
          <p> 977 sq. ft.</p>
          <p>3.10cr</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
