"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

// Dynamic footer sections
const footerSections: FooterSectionProps[] = [
  {
    title: "Quick links",
    links: [
      { label: "Home", href: "/" },
      { label: "Top sales", href: "/top-sales" },
      { label: "Services", href: "/services" },
      { label: "Properties", href: "/properties" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Properties",
    links: [
      { label: "Houses", href: "/houses" },
      { label: "Apartments", href: "/apartments" },
      { label: "Land", href: "/land" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "Our Story", href: "/our-story" }],
  },
  {
    title: "Careers",
    links: [{ label: "Work with us", href: "/careers" }],
  },
];

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-30 px-8 pb-8 bg-[#1A1C20]">
      
  <div className="">
        <div className="col-span-1 flex justify-start items-start mb-8 md:mb-0">
        <img
          src="/smlog.png"
          alt="Iwacu Hub Logo"
          height={120}
          width={120}
        />
      </div>
      <div className="flex gap-3 mt-14">
        <Facebook color="white" size={18} className="cursor-pointer hover:scale-105 hover:-translate-y-2 transition duration-500"/>
        <Twitter color="white" size={18} className="cursor-pointer hover:scale-105 hover:-translate-y-2 transition duration-500"/>
        <Youtube color="white" size={18} className="cursor-pointer hover:scale-105 hover:-translate-y-2 transition duration-500"/>
        <Instagram color="white" size={18} className="cursor-pointer hover:scale-105 hover:-translate-y-2 transition duration-500"/>
      </div>
  </div>

      
      <div className="col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {footerSections.map((sec, index) => (
          <div className="space-y-2" key={index}>
            <h6 className="text-white font-bold text-sm">{sec.title}</h6>
            <ul >
              {sec.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </footer>
  );
};

export default Footer;
