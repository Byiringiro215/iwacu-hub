import React from "react";
import { Button } from "./ui/button";
const SubscribeSection = () => {
  return (
    <div className="translate-y-20 rounded-2xl bg-[#444546]/50 mx-4 sm:mx-6 lg:mx-20">
      <div>
        <div className="space-y-1 p-4 sm:p-6 lg:p-8">
          <h1 className="font-bold text-2xl sm:text-3xl">Subscribe</h1>
          <h1 className="font-bold text-2xl sm:text-3xl">Newsletter</h1>
        </div>
        <p className="text-xs sm:text-sm text-white font-semibold mt-0 sm:mt-3 px-4 sm:px-6 lg:px-8">The Travel</p>
        <div className="bg-black p-4 sm:p-6 lg:p-8 rounded-b-2xl">
          <p className="text-xs sm:text-sm text-white my-2 max-w-prose">
            Get inspired! Receive tour discounts, tips and good place to get reservation.
          </p>
          <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2 mt-3" onSubmit={(e)=>e.preventDefault()}>
            <input
              className="bg-white placeholder:text-[#8A8A8A] placeholder:text-sm focus:outline-none focus:border-2 focus:border-[#302F2F] rounded-md px-4 py-2 w-full sm:flex-1"
              type="email"
              inputMode="email"
              aria-label="Your email address"
              placeholder="Your email address"
              required
            />
            <Button type="submit" variant={"secondary"} className="w-full sm:w-auto">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
