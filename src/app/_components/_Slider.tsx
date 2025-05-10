// components/Slider.jsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Slide = {
  image: string;
  alt: string;
};

const slides: Slide[] = [
  {
    image: '/images/slider-image-1.jpeg',
    alt: 'Slide 1',
  },
  {
    image: '/images/slider-image-2.jpeg',
    alt: 'Slide 2',
  },
  {
    image: '/images/slider-image-3.jpeg',
    alt: 'Slide 3',
  },
];
export default function Slider(): JSX.Element {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-[400px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}