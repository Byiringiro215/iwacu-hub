import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Map, MapPin, Pin, Pointer } from "lucide-react";

interface pickProps {
  image: string;
  name: string;
  rate: number;
  reviews: string;
}
const topPickups: pickProps[] = [
  { image: "/pick1.png", name: "Kibagaba villa", rate: 5.0, reviews: "12k" },
  { image: "/pick2.png", name: "Game park Hotel", rate: 4.0, reviews: "12k" },
];

const TopPicksSection = () => {
  return (
    <div className="py-20 px-14 flex flex-col md:flex-row  items-center gap-14">
      {/* left part */}
      <div className="flex  gap-4">
        {topPickups.map((pick, index) => (
          <div className="" key={index}>
            <Image
              className="rounded-lg relative h-72 w-80"
              src={pick.image}
              alt="top-pick-up image"
              width={200}
              height={300}
            />
            <div className="absolute w-[30%] md:w-[16%] p-2 md:p-4  bg-white translate-x-5 -translate-y-15  md:-translate-y-10  rounded-lg ">
              <p className="font-bold text-[12px]">{pick.name}</p>
              <p className="flex gap-2 text-[10px]">
                <span>⭐</span>
                <span className="font-bold">{pick.rate}</span>
                <span className="text-[#BBBBBB]">[{pick.reviews}Reviews]</span>
              </p>
              <button className="flex items-center gap-2 text-[12px] font-semibold text-[#396FF9] cursor-pointer">
                Get Reservation
                 <MapPin size={14}/>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* right part */}
      <div className="space-y-8">
        <h1 className="font-bold text-4xl">THIS WEEK'S TOP PICKS</h1>
        <p className="text-[#8C8C8C] text-sm">Discover popular assets on the market and some. Explore one of those and be able to buy,rent or reserve it .</p>
<Button>Find Place</Button>
      </div>
    </div>
  );
};

export default TopPicksSection;
