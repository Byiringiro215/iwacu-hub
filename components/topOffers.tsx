import React from "react";
import CardSlider from "./ui/coursel";
import Image from "next/image";
import clsx from "clsx";

interface TopOfferProps {
  image?: string;
  title?: string;
  description?: string;
  value?: string;
}

const topOffers: TopOfferProps[] = [
  {
    image: "/offer1.png",
    title: "Get",
    description: "Discount for Renting Alan Mansion",
    value: "50%",
  },
  {
    image: "/offer2.png",
    title: "Get",
    description: "Discount for Renting IRA View",
    value: "50%",
  },
  { image: "/offer3.png", value: "Reserved" },
  {
    image: "/offer1.png",
    title: "Get",
    description: "Discount for Renting Alan Mansion",
    value: "50%",
  },
  {
    image: "/offer2.png",
    title: "Get",
    description: "Discount for Renting IRA View",
    value: "50%",
  },
  { image: "/offer3.png", value: "Reserved" },
];

const TopOffers = () => {
  return (
    <div className="px-14 pb-20 pt-10 ">
      <h1 className="font-bold text-2xl text-center -mb-20">TOP OFFERS</h1>

      <div className="my-20">
        <CardSlider
          items={topOffers}
          slidesPerView={3}
          spaceBetween={0}
          showDots={false}
          showArrows={true}
          renderSlide={(offer) => (
            <div className="relative rounded-lg overflow-hidden group mr-8 mt-10">
              <Image
                className="w-full  object-cover brightness-75 transition group-hover:brightness-50"
                src={offer.image ?? "/fallback.png"}
                alt="offer image"
                width={400}
                height={250}
              />

              <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
                {offer.title && (
                  <span className="text-white font-semibold">
                    {offer.title}
                  </span>
                )}
                <p
                  className={clsx(
                    "text-3xl font-bold text-white",
                    (!offer.title || !offer.description) && "text-center w-full"
                  )}
                >
                  {offer.value}
                </p>
                {offer.description && (
                  <p className="text-xs text-gray-300 mt-1">
                    {offer.description}
                  </p>
                )}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default TopOffers;
