import React from "react";
import "./UpcomingCard.css";
import UpcomingCardComponent from "./UpcomingCardComponent/UpcomingCardComponent.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { v4 as uuidv4 } from "uuid";

const UpcomingCard = ({ upM }) => {
  return (
    <div className="position-relative">
      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          slidesPerGroupAuto={true}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            760: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {upM &&
            upM.map((movie) => {
              return (
                <SwiperSlide key={uuidv4()}>
                  <UpcomingCardComponent
                    key={uuidv4()}
                    title={movie.title}
                    poster_path={movie.poster_path}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </>
    </div>
  );
};

export default UpcomingCard;
