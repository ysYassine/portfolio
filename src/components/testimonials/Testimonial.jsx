import React from "react";
import "./testimonial.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Person 1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis eos laborum! Sint ratione nihil quidem illo sapiente! Sapiente dolorum dolore corrupti officia quis incidunt adipisci aspernatur quod blanditiis consequuntur?",
  },
  {
    avatar: AVATAR2,
    name: "Person 1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis eos laborum! Sint ratione nihil quidem illo sapiente! Sapiente dolorum dolore corrupti officia quis incidunt adipisci aspernatur quod blanditiis consequuntur?",
  },
  {
    avatar: AVATAR3,
    name: "Person 1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis eos laborum! Sint ratione nihil quidem illo sapiente! Sapiente dolorum dolore corrupti officia quis incidunt adipisci aspernatur quod blanditiis consequuntur?",
  },
  {
    avatar: AVATAR4,
    name: "Person 1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis eos laborum! Sint ratione nihil quidem illo sapiente! Sapiente dolorum dolore corrupti officia quis incidunt adipisci aspernatur quod blanditiis consequuntur?",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }) => (
          <SwiperSlide className="testimonial" key={name}>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar one" />
            </div>
            <h5 className="client__name">Person 1</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
