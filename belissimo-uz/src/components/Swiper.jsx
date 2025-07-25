import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ads1 from "../assets/images/ads1.webp";
import ads2 from "../assets/images/ads2.webp";
import ads3 from "../assets/images/ads3.webp";
import ads4 from "../assets/images/ads4.webp";
import ads5 from "../assets/images/ads5.webp";

const images = [ads1, ads2, ads3, ads4, ads5];

const Swiper = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full flex justify-center mt-3 items-center">
      <div className="w-full sm:full lg:w-[75%] px-1">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Swiper;
