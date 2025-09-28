import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const stats = [
  { label: "places", value: "105+" },
  { label: "bookings", value: "270+" },
  { label: "categories", value: "010+" },
];
const HeroSection = () => {
  return (
    <div className="px-14  pyb-10 flex  gap-5  ">
      <div className="space-y-4 pt-20 pr-4">
        <h1 className="text-4xl font-bold">DISCOVER PROPERTIES AROUND YOU</h1>
        <p className="text-[#8A8A8A] text-sm">
          Explore a wide range of properties for sale and rent in Rwanda and
          across Africa.
        </p>
        <div className="flex gap-3 items-center">
          <input
            className="placeholder:text-[#8A8A8A] placeholder:text-sm focus:outline-none border-2 border-[#E0E0E0] focus:border-[#302F2F] rounded-md px-4 py-2 w-96"
            type="text"
            placeholder="Which place Is On Your Mind ?"
          />
          <Button className="h-10">Search</Button>
        </div>
        <div className="flex gap-8 mt-10 items-center">
          {stats.map((stat, index) => (
            <div className="flex-col gap-2" key={index}>
              <p className="font-bold text-3xl">{stat.value}</p>
              <p className="text-xs text-[#5C5C5C]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/hero.png"
          width={500}
          height={500}
          alt="hero-section-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
