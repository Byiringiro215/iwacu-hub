import React from "react";
import { CupSoda, CupSodaIcon, Heart, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { placeProps } from "@/app/(main)/favourites/page";

const HotelCard = ({
  name,
  numberOfStars,
  reviews,
  numOfImages,
  location,
  aminities,
  rate,
  price,
  imageUrl,
  id,
}: placeProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm overflow-hidden ">
      <div className="relative w-full md:w-1/3 h-48 md:h-auto">
        <img
          src={imageUrl}
          alt="Hotel"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white/50  text-xs px-2 py-1 rounded-md">
          {numOfImages} images
        </span>
      </div>

      <div className="flex flex-col gap-1 justify-between w-full md:w-2/3 p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin color="black" size={15}/>
              {location}
              </p>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <div className="flex text-orange-500 text-sm">★★★★★</div>
                <span className="text-xs  ">
                  {numberOfStars} Star Hotel
                </span>
              </div>
              <div className="flex items-end text-xs font-semibold">
              {/* <CupSodaIcon size={16}/> */}
                 <span>{aminities}+ Aminities</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="border border-blue-500  text-xs p-2  rounded  font-medium">
                {rate}
              </span>
              <p className="flex gap-2 items-center text-xs font-bold">
                Very Good
                <span className="font-normal ">{reviews} reviews</span>
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">starting from</p>
            <p className="text-[#396FF9] font-bold text-lg flex items-center">
              <span>${price}</span>
               <span className="text-xs">/night</span>
            </p>
            <p className="text-xs text-gray-500"> excl. tax</p>
          </div>
        </div>
        

        <div className="flex items-center gap-2 mt-4">
          <Button variant={'outline'} size={'icon'} className="p-3 border border-red-500 rounded-lg hover:bg-gray-100">
            <Heart className="w-5 h-5 text-red-500" />
          </Button>
          <Button className="w-full text-black bg-[#699BFE]/50 hover:bg-[#699BFE]/40">
            View Place
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
