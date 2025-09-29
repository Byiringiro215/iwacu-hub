import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SelectOptionProps {
  label: string;
  options: string[];
}

const selectOptions: SelectOptionProps[] = [
  {
    label: "Apartment",
    options: ["Starlex Apartment", "Kacyiru Apartment", "Downtown Apartment"],
  },
  {
    label: "Houses",
    options: ["Lightshine", "Gikondo House", "Kigali House"],
  },
  {
    label: "Land",
    options: ["Zoo", "Park", "School", "Hospital"],
  },
  {
    label: "Small Houses",
    options: [
      "1 room, 2 guests",
      "2 rooms, 4 guests",
      "3 rooms, 6 guests",
      "4 rooms, 8 guests",
    ],
  },
];

const Hero = () => {
  return (
    <div
      className="pt-52 h-[32rem] px-20 "
      style={{
        backgroundImage: "url('/hero2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <div className="space-y-2 w-3/4">
        <h1 className="text-5xl text-white font-bold">
          CHOOSE A PROPERTY YOU LIKE EFFORTLESSLY
        </h1>
        <p className="text-white/95 ">
          Explore a wide range of properties for sale and rent in Rwanda and
          across Africa.
        </p>
      </div>

      <div className="p-4 rounded-t-2xl bg-white space-y-4 mt-10">
        <h5 className="font-bold text-lg">Where are you Heading?</h5>

        <div className="flex justify-between items-center gap-4 text-xs font-light text-[#1C1B1F]/90">
          {selectOptions.map((selectOption, index) => (
            <fieldset
              key={index}
              className="w-full space-y-1 border border-gray-300 rounded-md px-2 pb-2"
            >
              <legend className="font-medium px-1">{selectOption.label}</legend>
              <Select  defaultValue={selectOption.options[0]}>
                <SelectTrigger className="border-none focus:outline-none focus:ring-0">
                  <SelectValue placeholder={selectOption.options[0]} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {selectOption.options.map((option, idx) => (
                    <SelectItem className="text-xs" value={option} key={idx}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </fieldset>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
