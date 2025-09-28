import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
const SubscribeSection = () => {
  return (
    <div className=" translate-y-20  rounded-2xl bg-[#444546]/50 mx-20">
     <div>
         <div className="space-y-1 p-4">
        <h1 className="font-bold text-3xl">Subscribe</h1>
        <h1 className="font-bold text-3xl">Newsletter</h1>
      </div>
      <p className="text-sm text-white font-semibold mt-3 ml-4">The Travel</p>
      <div className="bg-black p-4">
        <p className="text-xs text-white my-2">
          Get inspired! Receive tour discounts, tips and good place to get
          reservation.
        </p>
        <div className="flex items-center gap-2">
          <input
            className="bg-white placeholder:text-[#8A8A8A] placeholder:text-sm focus:outline-none  focus:border-2 focus:border-[#302F2F] rounded-md px-4 py-2 w-96"
            type="text"
            placeholder="Your email address"
          />
          <Button variant={"secondary"}>Subscribe</Button>
        </div>
      </div>
     </div>
     {/* <Image
     className=" size-[20%]"
     src='/subscribe.png'
     height={200}
     width={200}
     alt="subscribe image"
     /> */}
    </div>
  );
};

export default SubscribeSection;
