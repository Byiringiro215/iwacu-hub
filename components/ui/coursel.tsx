"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full px-10 relative">
      {showArrows && (
        <>
          <button
            ref={prevRef}
            className="absolute cursor-pointer top-1/2 -left-4 -translate-y-1/2 z-10 size-8 bg-white text-black rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="absolute cursor-pointer top-1/2 right-2 -translate-y-1/2 z-10 size-8 bg-white text-black rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </>
      )}

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop
        navigation={
          showArrows
            ? { prevEl: prevRef.current, nextEl: nextRef.current }
            : false
        }
        pagination={showDots ? { clickable: true } : false}
        onInit={(swiper) => {
          if (showArrows && prevRef.current && nextRef.current) {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item, index)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
