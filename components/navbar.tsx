'use client'
import React from 'react'
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
interface LinkProps {
    href: string;
    label: string;
}
const Navlinks: LinkProps[] = [
    { href: "#", label: "home" },
    { href: "top-sales", label: "top sales" },
    { href: "services", label: "services" },
    { href: "#", label: "properties" },
    { href: "testimonies", label: "testimials" },
    { href: "#", label: "Contacts" },
];

const Navbar = () => {
    const pathname=usePathname();
  return (
    <div className='fixed w-full z-50 px-10 py-5 bg-white shadow flex justify-between items-center'>
      
        <div className='flex gap-2 items-end'>
            <img src="/smlogo.png" alt="iwacu hub logo" height={120} width={120} className=''/>
        </div>
        <div className='hidden md:flex gap-6 items-center'>
            {Navlinks.map((link) => (
              link.label === 'properties' ? (
                <div key={link.label} className='relative group'>
                  <button className='flex items-center gap-1 font-medium text-sm capitalize text-[#8C8C8C] hover:text-[#000033]'>
                    Properties
                  <ChevronDown/>
                  </button>
                  <div className='absolute left-0 top-full  w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition'>
                    <div className='py-2'>
                      <Link href='#' className='block px-4 py-2 text-sm text-[#4b5563] hover:bg-gray-50 hover:text-[#000033]'>For Sale</Link>
                      <Link href='#' className='block px-4 py-2 text-sm text-[#4b5563] hover:bg-gray-50 hover:text-[#000033]'>For Rent</Link>
                      <Link href='#' className='block px-4 py-2 text-sm text-[#4b5563] hover:bg-gray-50 hover:text-[#000033]'>New Developments</Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  key={link.label}
                  className='font-medium text-sm capitalize hover:text-[#000033] text-[#8C8C8C]'
                >
                  {link.label}
                </Link>
              )
            ))}
        </div>
        <div className='hidden md:flex gap-2 items-center'>
            <a href="/login" className=' text-[#8C8C8C] font-semibold hover:text-[#000033]  border-r-2  pr-1'>Login</a>
            <a href="/signup" className='bg-[#000033] text-white px-4 py-2 rounded-md text-sm hover:bg-[#000033]/90'>Sign Up</a>
        </div>
        <button className='block md:hidden rounded-lg bg-gray-100 p-1 cursor-pointer'>
            <Menu/>
        </button>

    </div>
  )
}

export default Navbar
