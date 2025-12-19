import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

function Carousel({ children }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView="auto"
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} style={{ width: "auto" }}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
