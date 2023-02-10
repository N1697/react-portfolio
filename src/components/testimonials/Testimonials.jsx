import React, { useState } from "react";
import "./testimonials.css";
import clientsData from "./data.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  const [data, setDatas] = useState(clientsData);

  return (
    <section id="testimonials">
      <h5>Review from my clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        loop={true} //slidesPerView={1}
        grabCursor={true}
        spaceBetween={24} //10
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            //640
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          1024: {
            //768
            slidesPerView: 2, //4
            spaceBetween: 40, //40
          },
          // 1024: {
          //   slidesPerView: 5,
          //   spaceBetween: 50,
          // },
        }}
        modules={[Pagination]}
      >
        {data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt={name} className="testimonial__card-img" />
              <h5 className="testimonial__card-name">{name}</h5>
              <p className="testimonial__card-review">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
