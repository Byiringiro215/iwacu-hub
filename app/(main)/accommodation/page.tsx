"use client";

import HotelCard from "@/components/placeCard";
import React from "react";
import { places } from "../favourites/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Slider from "@radix-ui/react-slider";

interface FilterSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  defaultOpen = true,
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-gray-600">
          {open ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
};

const page = () => {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/3 lg:pr-6 mb-6 lg:mb-0">
        <h6 className="font-bold pb-4">Filters</h6>

        <FilterSection title="Price" defaultOpen>
          <div className="px-1 py-2">
            <Slider.Root
              className="relative flex items-center select-none w-full h-5"
              min={0}
              max={2000}
              step={10}
              defaultValue={[50, 1200]}
            >
              <Slider.Track className="bg-emerald-900 relative grow rounded-full h-[3px]">
                <Slider.Range className="absolute bg-emerald-900 rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb
                className="block size-4 rounded-full bg-[#86e7c3] border-2 border-[#86e7c3] shadow-[0_0_0_2px_#fff] focus:outline-none"
                aria-label="Minimum price"
              />
              <Slider.Thumb
                className="block size-4 rounded-full bg-[#86e7c3] border-2 border-[#86e7c3] shadow-[0_0_0_2px_#fff] focus:outline-none"
                aria-label="Maximum price"
              />
            </Slider.Root>
            <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
              <span>$50</span>
              <span>$1200</span>
            </div>
          </div>
        </FilterSection>

        <FilterSection title="Rating" defaultOpen>
          <div className="flex flex-wrap gap-2">
            {[0, 1, 2, 3, 4].map((r) => (
              <Button
                variant={"outline"}
                size={"icon"}
                key={r}
                className="border-emerald-500"
              >
                {r}+
              </Button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Freebies" defaultOpen>
          <div className="space-y-3">
            {[
              "Free breakfast",
              "Free parking",
              "Free internet",
              "Free airport shuttle",
              "Free cancellation",
            ].map((f) => (
              <label
                key={f}
                className="flex items-center gap-3 text-sm text-gray-800"
              >
                <Checkbox />
                <span>{f}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Amenities" defaultOpen>
          <div className="space-y-3">
            {[
              "24hr front desk",
              "Air-conditioned",
              "Fitness",
              "Pool",
              "Spa",
              "Restaurant",
              "Bar/Lounge",
            ].map((a) => (
              <label
                key={a}
                className="flex items-center gap-3 text-sm text-gray-800"
              >
                <Checkbox />
                <span>{a}</span>
              </label>
            ))}
          </div>
        </FilterSection>
        <button className="font-semibold text-blue-500 text-sm mt-2 cursor-pointer hover:text-blue-500/70">+24 more</button>
      </div>
      <div className="w-full ">
        <Tabs defaultValue="hotels" className="w-full ">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="motels">Motels</TabsTrigger>
            <TabsTrigger value="parks">Parks</TabsTrigger>
          </TabsList>

          <TabsContent value="hotels">
            {places.map((place) => (
              <div key={place.id} className="mb-4">
                <HotelCard
                  id={place.id}
                  name={place.name}
                  location={place.location}
                  imageUrl={place.imageUrl}
                  rate={place.rate}
                  aminities={place.aminities}
                  reviews={place.reviews}
                  price={place.price}
                  numberOfStars={place.numberOfStars}
                  numOfImages={place.numOfImages}
                />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="motels">
            <p className="p-4 bg-gray-100 rounded-md">motels</p>
          </TabsContent>
          <TabsContent value="parks">
            <p className="p-4 bg-gray-100 rounded-md">parks</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
