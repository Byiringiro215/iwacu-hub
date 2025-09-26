import React from "react";
import CardSlider from "./ui/coursel";
import { MapPin, Star, StarIcon } from "lucide-react";
import Image from "next/image";

interface accomodationProps {
  image: string;
  name: string;
  category: string;
  address: string;
  rate: number;
}
const accommodations: accomodationProps[] = [
  {
    image: "/acco1.png",
    name: "Iwacu Apartment",
    category: "Apartment",
    address: "Kigali,Rwanda",
    rate: 5.0,
  },
  {
    image: "/acco2.png",
    name: "Iwacu Apartment",
    category: "House",
    address: "Kigali,Rwanda",
    rate: 5.0,
  },
  {
    image: "/acco3.png",
    name: "Millenium Bridge",
    category: "Park",
    address: "Kigali,Rwanda",
    rate: 5.0,
  },
  {
    image: "/acco1.png",
    name: "Iwacu Apartment",
    category: "Apartment",
    address: "Kigali,Rwanda",
    rate: 5.0,
  },
  {
    image: "/acco2.png",
    name: "Iwacu Apartment",
    category: "House",
    address: "Kigali,Rwanda",
    rate: 5.0,
  },
  {
    image: "/acco3.png",
    name: "Millenium Bridge",
    category: "Park",
    address: "Kigali,Rwanda",
    rate: 5.0,
  },
];
const PopularAccomodates = () => {
  return (
    <div className="py-10 space-y-4">
      <h1 className="font-bold text-2xl text-center"> POPULAR ACCOMODATIONS</h1>
      <div className="px-20">
        <CardSlider
        items={accommodations}
        slidesPerView={3}
        spaceBetween={20}
        showDots={false}
        showArrows={true}
        renderSlide={(acco) => (
          <div className="bg-white w-72 ">
            <Image
              width={300}
              height={300}
              src={acco.image}
              alt={acco.name}
              className="w-full object-cover"
            />
            <div className="px-1 py-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  {acco.name}
                </h3>
                <p className="text-xs text-gray-600 flex gap-1 items-center">
                  Category:{" "}
                  <span className="font-semibold text-black">
                    {acco.category}
                  </span>{" "}
                </p>
              </div>
              <div className="flex items-center gap-20  ">
                <p className="text-sm text-[#D4D4D4] flex items-center gap-2">
                  <MapPin size={16} color="black" />
                  <span className="text-[12px]">{acco.address}</span>
                </p>
                <p className="mt-2 font-semibold flex items-center gap-1">
                  <span>
                    <StarIcon size={12} color="orange" />
                  </span>
                  <span className="text-[12px]">{acco.rate}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      />
      </div>
    </div>
  );
};

export default PopularAccomodates;
