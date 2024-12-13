import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Img1 from "../../assets/hero-carousel/w1.jpg"
import Img2 from "../../assets/hero-carousel/w2.jpg"
import Img3 from "../../assets/hero-carousel/wm1.jpg"
import Img4 from "../../assets/hero-carousel/wm2.jpg"
import Img5 from "../../assets/hero-carousel/wm3.jpg"
import Img6 from "../../assets/hero-carousel/wm4.jpg"

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
        <div className='md:w-1/2 w-full text-center'>
            <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>Maram Tribe in the hills of Manipur, India</h1>
            <p className='py-4'>Welcome to Maram Tribe Stories, a space dedicated to preserving and celebrating our rich cultural heritage. This blog is a place to share the stories, traditions, and wisdom passed down through generations, honoring the history that has shaped who we are today. Through articles, personal reflections, and cultural insights, we aim to connect our community and ensure that the legacy of our ancestors lives on for future generations. Join us in keeping our culture alive, vibrant, and strong.</p>
        </div>

        <div className='md:w-1/2 w-full mx-auto bg-black'>
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
        className=""
      >
        <SwiperSlide >
            <img src={Img1} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img2} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img3} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img4} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img5} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img6} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Hero