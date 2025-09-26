import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const images = ["/story1.png", "/story2.png", "/story3.png", "/story4.png"];
const OurstorySection = () => {
  return (
    <div className="py-20 px-14 flex flex-col md:flex-row  items-center gap-14">
      <div className="grid grid-cols-2 gap-6">
        {images.map((image, index) => (
          <Image
            src={image}
            className="rounded-lg  h-54 w-2xl"
            width={200}
            height={200}
            alt="story photo"
            key={index}
          />
        ))}
      </div>
      <div className="space-y-8">
        <h1 className="font-bold text-4xl">OUR SHORT STORY</h1>
        <p className="text-[#8C8C8C] text-sm">
          IwacuHub was created to make property transactions in Rwanda and
          Africa simple, secure, and transparent. We connect verified property
          owners with buyers and renters through trusted listings, secure
          payments, and easy access — both online and offline.
        </p>
        <Button>See more</Button>
      </div>
    </div>
  );
};

export default OurstorySection;
