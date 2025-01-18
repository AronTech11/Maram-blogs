import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Img1 from "../../assets/hero-carousel/w1.jpg";
import Img2 from "../../assets/hero-carousel/w2.jpg";
import Img3 from "../../assets/hero-carousel/wm1.jpg";
import Img4 from "../../assets/hero-carousel/wm2.jpg";
import Img5 from "../../assets/hero-carousel/wm3.jpg";
import Img6 from "../../assets/hero-carousel/wm4.jpg";
import './Hero.css';  // Importing the CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="hero-swiper"
      >
        <SwiperSlide>
          <img src={Img1} alt="Image 1" className="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="Image 2" className="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="Image 3" className="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="Image 4" className="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt="Image 5" className="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img6} alt="Image 6" className="hero-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
