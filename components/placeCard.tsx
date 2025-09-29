import React from "react";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { placeProps } from "@/app/(main)/favourites/page";

const HotelCard = ({name,numberOfStars,reviews,numOfImages,description,aminities,rate,price,imageUrl,id}:placeProps) => {
  return (
    <div className="flex bg-white rounded-xl shadow-sm overflow-hidden ">
     
      <div className="relative w-1/3">
        <img
          src={imageUrl}
          alt="Hotel"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          {numOfImages}Images
        </span>
      </div>

      
      <div className="flex flex-col justify-between w-2/3 p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold text-lg">
              {name}
            </h3>
            <p className="text-sm text-gray-500">
              {description}
            </p>

            
            <div className="flex items-center gap-3 mt-2">
              <div className="flex text-yellow-500 text-sm">★★★★★</div>
              <span className="text-sm text-gray-600">{numberOfStars} Star Hotel</span>
              <span className="text-sm text-gray-600">• {aminities}+ Amenities</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm font-medium">
                {rate}
              </span>
              <span className="text-sm text-gray-500">
                Very Good {reviews} reviews
              </span>
            </div>
          </div>

         
          <div className="text-right">
            <p className="text-xs text-gray-400">starting from</p>
            <p className="text-blue-600 font-bold text-lg">$240</p>
            <p className="text-xs text-gray-500">/Night excl. tax</p>
          </div>
        </div>

      
        <div className="flex items-center gap-2 mt-4">
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            <Heart className="w-5 h-5 text-red-500" />
          </button>
        <Button variant={'secondary'}>View Place</Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
