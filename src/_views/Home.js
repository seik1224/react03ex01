import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      onSlideChangeTransitionStart={(swiper) => {
        setActiveIndex(swiper.realIndex);
      }}
    >
      {[
        { title: "Mario", description: "마리오와 함께 신나는 모험을 떠나보세요!", image: "bg1.jpg" },
        { title: "Zelda", description: "젤다와 함께 신나는 모험을 떠나보세요!", image: "bg2.jpg" },
        { title: "Pokemon", description: "포켓몬과 함께 신나는 모험을 떠나보세요!", image: "bg3.jpg" },
      ].map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/${slide.image}`}
              alt=""
              className={`w-full h-full object-cover transition-transform duration-[1500ms] ${
                activeIndex === index ? "scale-100" : "scale-110"
              }`}
            />
          </div>
          <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            <h4
              className={`text-8xl en-txt text-white mb-2 transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.title}
            </h4>
            <p
              className={`text-2xl text-white mb-14 transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.description}
            </p>
            <a
              href="/"
              className="text-white border-2 border-white border-solid px-4 py-2 rounded-full hover:bg-white hover:!text-[#ff541e]"
            >
              더보기
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Home;
