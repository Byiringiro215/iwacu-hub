"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const bgImage = pathname?.includes("/signup") ? "/signup.png" : "/login.png";
  return (
    <div className="relative min-h-screen flex gap-6 px-40">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
          filter: "brightness(0.5)",
        }}
      />

      <div className="relative z-10 flex items-center gap-6">
        {/* Left Side*/}
        <div className="flex-col mb-32">
          {/* Logo */}
          <div className="flex gap-1 items-end">
            <Image
              src={"/logo.png"}
              alt="iwacu hub logo"
              height={100}
              width={100}
            />
            <span className="text-white font-bold text-4xl">IwacuHub</span>
          </div>

          <div className="mt-20 space-y-4">
            <h1 className="text-white font-bold text-4xl">
              Building the Future...
            </h1>
            <p className="text-white">
              Explore a wide range of properties for sale and rent in Rwanda and
              across Africa.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-t-2xl p-8 flex-col  w-lg mt-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
