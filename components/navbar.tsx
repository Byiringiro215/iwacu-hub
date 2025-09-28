"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Search,
  Heart,
  Globe,
  User as UserIcon,
  CreditCard,
  Settings as SettingsIcon,
  LifeBuoy,
  LogOut,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface LinkProps {
  href: string;
  label: string;
}
const Navlinks: LinkProps[] = [
  { href: "#", label: "home" },
  { href: "#", label: "top sales" },
  { href: "#", label: "services" },
  { href: "#", label: "properties" },
  { href: "#", label: "testimonials" },
  { href: "#", label: "Contacts" },
];

type User = {
  name: string;
  image?: string;
};

type NavbarProps = {
  isAuthenticated?: boolean;
  user?: User;
  onLogout?: () => void;
};

// Profile dropdown component
const ProfileMenu = ({ user, onLogout }: { user?: User; onLogout?: () => void }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keyup', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keyup', onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="inline-flex items-center focus:outline-none"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {user?.image ? (
          <img
            src={'/pp1.jpg'}
            alt={user.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon className="h-4 w-4 text-gray-600" />
          </div>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden"
        >
         
          <div className="p-3 flex items-center gap-3 border-b border-gray-100">
            {user?.image ? (
              <img src={ '/pp1.jpg'} alt={user?.name || 'User'} className="h-10 w-10 rounded-full object-cover" />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-gray-600" />
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-gray-900">{user?.name || 'John Doe'}</p>
              <p className="text-xs text-emerald-600">Online</p>
            </div>
          </div>

        
          <div className="py-2">
            <Link href="/account" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <span className="flex items-center gap-2"><UserIcon className="h-4 w-4"/> My Account</span>
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </Link>
            <Link href="/payments" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <span className="flex items-center gap-2"><CreditCard className="h-4 w-4"/> Payments</span>
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </Link>
            <Link href="/settings" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <span className="flex items-center gap-2"><SettingsIcon className="h-4 w-4"/> Settings</span>
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </Link>
            <div className="my-2 h-px bg-gray-100" />
            <Link href="/support" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <span className="flex items-center gap-2"><LifeBuoy className="h-4 w-4"/> Support</span>
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </Link>
            {onLogout && (
              <button
                onClick={() => { setOpen(false); onLogout(); }}
                className="w-full flex items-center justify-between px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                <span className="flex items-center gap-2"><LogOut className="h-4 w-4"/> Logout</span>
                <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = ({ isAuthenticated = false, user, onLogout }: NavbarProps) => {
  const pathname = usePathname();
  return (
    <div className="fixed w-full z-50 px-4 md:px-10 py-2 bg-white shadow ">
      {isAuthenticated ? (
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center justify-between gap-40">
            <div className="flex gap-2 items-end">
              <img
                src="/smlogo.png"
                alt="iwacu hub logo"
                height={120}
                width={120}
              />
            </div>
            <nav className="hidden md:flex md:justify-center gap-6 items-center">
              <Link
                href="/home"
                className="text-sm text-[#8C8C8C] hover:text-[#000033]"
              >
                Home
              </Link>
              <Link
                href="/accommodation"
                className="text-sm text-[#8C8C8C] hover:text-[#000033]"
              >
                Accommodation
              </Link>
              <Link
                href="/book"
                className="text-sm text-[#8C8C8C] hover:text-[#000033]"
              >
                Book
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4 ">
            <select id="language" className="rounded p-1 text-sm bg-gray-100/70">
              <option value="en"> English</option>
              <option value="rw"> Kinyarwanda</option>
              <option value="fr"> French</option>
            </select>

            <Link
              href="/favorites"
              className="hidden  md:flex items-center gap-1 text-sm text-[#111] hover:text-[#000033]"
            >
              <Heart className="h-5 w-5" />
              <span className="font-medium">Favourites</span>
            </Link>

            {/* Profile dropdown */}
            <ProfileMenu user={user} onLogout={onLogout} />

            <button className="block md:hidden rounded-lg bg-gray-100 p-2">
              <Menu />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-end">
            <img
              src="/smlogo.png"
              alt="iwacu hub logo"
              height={120}
              width={120}
              className=""
            />
          </div>
          <div className="hidden md:flex gap-6 items-center">
            {Navlinks.map((link) =>
              link.label === "properties" ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 font-medium text-sm capitalize text-[#8C8C8C] hover:text-[#000033]">
                    Properties
                    <ChevronDown />
                  </button>
                  <div className="absolute left-0 top-full  w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition">
                    <div className="py-2">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-[#4b5563] hover:bg-gray-50 hover:text-[#000033]"
                      >
                        For Sale
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-[#4b5563] hover:bg-gray-50 hover:text-[#000033]"
                      >
                        For Rent
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-[#4b5563] hover:bg-gray-50 hover:text-[#000033]"
                      >
                        New Developments
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  key={link.label}
                  className="font-medium text-sm capitalize hover:text-[#000033] text-[#8C8C8C]"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <a
              href="/login"
              className=" text-[#8C8C8C] font-semibold hover:text-[#000033]  border-r-2  pr-1"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-[#000033] text-white px-4 py-2 rounded-md text-sm hover:bg-[#000033]/90"
            >
              Sign Up
            </a>
          </div>
          <button className="block md:hidden rounded-lg bg-gray-100 p-1 cursor-pointer">
            <Menu />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
