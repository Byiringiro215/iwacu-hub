'use client'
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    </div>
  );
}