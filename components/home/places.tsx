import React from "react";
import { Button } from "../ui/button";
import { HousePlusIcon } from "lucide-react";
import Image from "next/image";

interface PlaceProps {
  image: string;
  name: string;
  location: string;
}

interface bestApartmentProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const bestApartments: bestApartmentProps[] = [
  {
    image: "/apart1.png",
    name: "Sunrise Apartments",
    description: "2-bedroom",
    price: 1200,
  },
  {
    image: "/apart2.png",
    name: "Cityview Residences",
    description: "City center",
    price: 1500,
  },
  {
    image: "/apart3.png",
    name: "Greenfield Apartments",
    description: "Cozy & green",
    price: 1000,
  },
  {
    image: "/apart4.png",
    name: "Luxury Heights",
    description: "Premium",
    price: 2000,
  },
];

const places: PlaceProps[] = [
  {
    image: "/place1.png",
    name: "Kigali Heights",
    location: "Kigali, Rwanda",
  },
  {
    image: "/place2.png",
    name: "Kigali City Tower",
    location: "Kigali, Rwanda",
  },
  {
    image: "/place3.png",
    name: "Kigali Convention Center",
    location: "Kigali, Rwanda",
  },
  {
    image: "/place4.png",
    name: "Kigali Marriott Hotel",
    location: "Kigali, Rwanda",
  },
  {
    image: "/place5.png",
    name: "Ubumwe Grande Hotel",
    location: "Kigali, Rwanda",
  },
  {
    image: "/place6.png",
    name: "Radisson Blu Hotel",
    location: "Kigali, Rwanda",
  },
  {
    image: "/place1.png",
    name: "Kigali Heights Annex",
    location: "Kigali, Rwanda",
  },
  {
    image: "/place2.png",
    name: "City Tower Annex",
    location: "Kigali, Rwanda",
  },
  {
    image: "/place3.png",
    name: "Convention Center Annex",
    location: "Kigali, Rwanda",
  },
];
const Places = () => {
  return (
    <div className="py-10 px-20">
      <div className="flex justify-end">
        <Button>
          <HousePlusIcon color="white" />
          Show Places
        </Button>
      </div>

      <section>
        <div className="my-4 space-y-1 w-2/5">
          <h1 className="text-3xl  font-semibold">
            PLAN ON WHICH PROPERTY TO BUY OR RENT
          </h1>
          <p className="text-gray-500 text-sm">
            Search Places Hire to our most popular Places
          </p>
        </div>

        <div className="flex justify-end">
          <Button
            variant={"outline"}
            size={"sm"}
            className="hover:bg-gray-200/50"
          >
            See more places
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {places.map((place, index) => (
            <div
              key={index}
              className="flex gap-2 items-center shadow-sm rounded-lg p-3"
            >
              <img
                src={place.image}
                alt={place.name}
                className="rounded-lg w- h- object-cover"
              />
              <div className="">
                <h3 className="font- text-gray-500/70 uppercase">
                  {place.name}
                </h3>
                <p className=" uppercase font-">{place.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 space-y-8">
        <div className="my-4 space-y-4 ">
          <h1 className="text-3xl  font-semibold">DISCOVER BEST APARTMENTS</h1>
          <p className="text-gray-500 text-sm w-1/2">
            Explore a wide range of properties for sale and rent in Rwanda and
            across Africa.
          </p>
        </div>

        <div className="flex justify-end">
          <Button
            variant={"outline"}
            size={"sm"}
            className="hover:bg-gray-200/50 "
          >
            See All
          </Button>
        </div>

        <div className="flex flex-col md:flex-row  gap-2 ">
{          bestApartments.map((apartment, index) => (
      <div className="relative rounded-lg overflow-hidden group  w-full" key={index}>
                <Image
                  className="w-full  object-cover brightness-75 transition group-hover:brightness-50"
                  src={apartment.image}
                  alt="offer image"
                  width={400}
                  height={250}
                />
  
                <div className="absolute bottom-0 right-0 left-0 flex flex-col  justify-center p-4">
                  < p className="font-semibold  text-white ">{apartment.name}</p>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xs text-white">{apartment.description}</p>
                    <span className="font-semibold text-2xl text-white">${apartment.price}</span>
                  </div>
                  <Button variant={'secondary'} className="w-full text-white">Buy/Reserve</Button>
                </div>
              </div>
))}
        </div>
      </section>
    </div>
  );
};

export default Places;
