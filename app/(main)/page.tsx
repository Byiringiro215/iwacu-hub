"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import TopPicksSection from "@/components/topPicks";
import WhyUs from "@/components/whyus";
import OurstorySection from "@/components/ourstory";
import PopularAccomodates from "@/components/popularAccormodates";
import TestimoniesSection from "@/components/testimoniesSection";
import TopOffers from "@/components/topOffers";
import SubscribeSection from "@/components/subscribeSection";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <TopPicksSection />
      <WhyUs />
      <OurstorySection />
      <TestimoniesSection />
      <PopularAccomodates />
      <TopOffers />
    </div>
  );
}
