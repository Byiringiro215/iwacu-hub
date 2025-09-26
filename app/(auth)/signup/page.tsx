"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const login = () => {
  return (
    <div>
      <h5 className="text-sm">LETS GETY STARTED </h5>
      <h1 className="text-bold text-lg mt-2 mb-3">Create an Account</h1>
      <div>
        <form className="flex flex-col gap-2" autoComplete="off">
          <Input
            label="Your Name"
            type="text"
            onChange={() => {}}
            placeholder="Johnson Doe"
            name="name"
            autoComplete="name"
          />
          <Input
            label="Email"
            type="email"
            onChange={() => {}}
            placeholder="johnsondoe@gmail.com"
            name="email"
            autoComplete="email"
          />
          <Input
            label="Password"
            type="password"
            onChange={() => {}}
            placeholder="********"
            name="new-password"
            autoComplete="new-password"
          />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Property Owner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owner">Property Owner</SelectItem>
              <SelectItem value="tenant">Tenant</SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full mt-4">GET STARTED</Button>
          <div className="flex items-center gap-3 my-2">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-gray-500 text-sm">Or</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant={"outline"}
              className="w-full border-gray-200 text-[#616161] hover:bg-gray-200/50 flex items-center gap-2 justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303C33.827 31.657 29.28 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C33.64 5.049 28.997 3 24 3 12.954 3 4 11.954 4 23s8.954 20 20 20c10.493 0 19-8.507 19-19 0-1.341-.138-2.651-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.571 4.814C14.655 16.103 18.961 13 24 13c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C33.64 5.049 28.997 3 24 3 16.318 3 9.656 7.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 43c5.222 0 9.926-1.999 13.46-5.258l-6.207-5.238C29.211 34.091 26.746 35 24 35c-5.26 0-9.795-3.317-11.293-7.946l-6.54 5.036C9.47 38.798 16.204 43 24 43z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.012 12.012 0 0 1-4.05 5.504l.003-.002 6.207 5.238C36.91 39.205 43 35 43 24c0-1.341-.138-2.651-.389-3.917z"
                />
              </svg>
              Sign up with Google
            </Button>
            <Button
              variant={"outline"}
              className="w-full border-gray-200 text-[#616161] hover:bg-gray-200/50 flex items-center gap-2 justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-black"
              >
                <path d="M16.365 1.43c0 1.14-.42 2.19-1.24 3.08-.99 1.11-2.6 1.96-4.2 1.84-.07-1.1.48-2.28 1.28-3.12.98-1.06 2.67-1.83 4.16-1.8.02.2.02.4.02.6zM21.5 17.27c-.38.88-.83 1.69-1.36 2.44-.72 1.04-1.31 1.76-1.78 2.24-.72.75-1.5 1.55-2.59 1.57-1 .02-1.26-.51-2.58-.51-1.32 0-1.61.49-2.62.53-1.04.04-1.83-.81-2.55-1.56-1.38-1.46-2.45-3.26-3.19-5.2-1.38-3.62-1.52-7.87.6-10.12 1.35-1.45 3.12-2.25 4.9-2.25 1.15 0 2.23.55 2.58.55.32 0 1.65-.68 2.78-.58.47.02 2.02.19 3.18 1.45-.08.06-1.78 1.04-1.76 3.11.02 2.48 2.16 3.3 2.19 3.32-.02.06-.34 1.2 1.02 2.69.24.26.96.91 2.02 1.15-.06.18-.11.36-.18.52z" />
              </svg>
              Sign up with Apple
            </Button>
          </div>
          <div className="flex gap-1 justify-center items-center my-4">
            <p className="text-[#212121] text-sm">Already hava an account?</p>
            <a
              href="/login"
              className="font-bold text-sm hover:underline text-[#000033]"
            >
              LOGIN HERE
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
