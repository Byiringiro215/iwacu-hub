"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardSliderProps<T> {
  items: T[];
  slidesPerView?: number;
  spaceBetween?: number;
  showArrows?: boolean;
  showDots?: boolean;
  renderSlide: (item: T, index: number) => React.ReactNode;
}

export default function CardSlider<T>({
  items,
  slidesPerView = 3,
  spaceBetween = 20,
  showArrows = false,
  showDots = false,
  renderSlide,
}: CardSliderProps<T>) {
  return (
    <div className="w-full space-x-0 px-10 relative">
      
      {showArrows && (
        <>
          <button className="custom-prev absolute cursor-pointer top-1/2 -left-4 -translate-y-1/2 z-10 size-8 bg-white text-black rounded-full shadow-lg flex items-center justify-center ">
            <ChevronLeft/>
          </button>
          <button className="custom-next absolute cursor-pointer top-1/2 right-2 -translate-y-1/2 z-10  size-8 bg-white text-black  rounded-full shadow-lg flex items-center justify-center ">
            <ChevronRight/>
          </button>
        </>
      )}

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop
        navigation={showArrows ? { nextEl: ".custom-next", prevEl: ".custom-prev" } : false}
        pagination={showDots ? { clickable: true } : false}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item, index)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
