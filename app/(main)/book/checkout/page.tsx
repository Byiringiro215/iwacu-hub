"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const CheckoutPage = () => {
  const [method, setMethod] = useState<string>("mobile");

  return (
    <div className="pt-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <label className="font-semibold">Payment Method</label>
          <Select value={method} onValueChange={setMethod}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mobile">Mobile Money</SelectItem>
              <SelectItem value="card">Card Payment</SelectItem>
              <SelectItem value="bank">Bank Transfer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mobile Money */}
        <div className="space-y-4">
          <h3 className="font-semibold">Mobile Money</h3>
          <Input label="Mobile Number" placeholder="Enter  mobile number" />
          <div>
            <label className="text-sm">Network Provider</label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select  provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mtn">MTN</SelectItem>
                <SelectItem value="airtel">Airtel</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Card Payment */}
        <div className="space-y-4 mt-8">
          <h3 className="font-semibold">Card Payment</h3>
          <Input label="Card Number" placeholder="Enter  card number" />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Expiry Date" placeholder="MM/YY" />
            <Input label="CVV" placeholder="Enter  CVV" />
          </div>
          <Input label="Name on Card" placeholder="Enter  name on card" />
          <Input label="Billing Address" placeholder="Enter  billing address" />
          <div className="grid grid-cols-2 gap-4">
            <Input label="City" placeholder="Enter  city" />
            <Input label="Postal Code" placeholder="Enter  postal code" />
          </div>
          <div>
            <label className="text-sm">Country</label>
            <Select defaultValue="rw">
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rw">Rwanda</SelectItem>
                <SelectItem value="ke">Kenya</SelectItem>
                <SelectItem value="tz">Tanzania</SelectItem>
                <SelectItem value="ug">Uganda</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Bank Transfer */}
        <div className="space-y-4 mt-10">
          <h3 className="font-semibold">Bank Transfer</h3>
          <Input label="Bank Name" placeholder="Enter  bank name" />
          <Input label="Account Number" placeholder="Enter  account number" />
          <Input label="Swift Code" placeholder="Enter  swift code" />
          <div className="flex items-center gap-2 pt-2">
            <Checkbox id="agree" />
            <label htmlFor="agree" className="text-sm">
              I agree to the terms and conditions
            </label>
          </div>
          <Button className="w-full bg-[#000033] hover:bg-[#000033]/90">
            Confirm Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
