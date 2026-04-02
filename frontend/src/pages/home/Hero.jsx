import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Img1 from "../../assets/hero-carousel/w1.jpg";
import Img2 from "../../assets/hero-carousel/w2.jpg";
import Img3 from "../../assets/hero-carousel/wm1.jpg";
import Img4 from "../../assets/hero-carousel/wm2.jpg";
import Img5 from "../../assets/hero-carousel/wm3.jpg";
import Img6 from "../../assets/hero-carousel/wm4.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Carousel */}
      <Swiper
        slidesPerView={1}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="absolute inset-0 h-full w-full"
      >
        {[Img1, Img2, Img3, Img4, Img5, Img6].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img
                src={img}
                alt={`Maram landscape ${i + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <p className="text-warm-gold font-medium text-sm md:text-base tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Senapati District &bull; Manipur &bull; India
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the Heritage of
            <br />
            <span className="text-warm-gold">the Maram Naga Tribe</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Preserving centuries of culture, traditions, festivals, and wisdom
            of the Maram people, a proud Tibeto-Burman Naga community nestled in
            the hills of Northeast India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about-maram/culture"
              className="bg-warm-gold text-deep-brown font-semibold px-8 py-3.5 rounded-lg hover:bg-warm-gold/90 transition-all text-sm md:text-base"
            >
              Explore Our Culture
            </Link>
            <Link
              to="/blogs"
              className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all text-sm md:text-base"
            >
              Read Stories & Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
