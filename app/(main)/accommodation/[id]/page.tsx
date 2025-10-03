"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { MapPin, Star, Heart, ArrowLeft, CheckCircle2 } from "lucide-react";
import { places } from "../../favourites/page";
import { Button } from "@/components/ui/button";

const AccommodationDetailsPage = () => {
  const params = useParams<{ id: string }>();
  const placeId = Number(params?.id);
  const place = places.find((p) => p.id === placeId);

  if (!place) {
    notFound();
  }

  return (
    <div className="pt-20 px-4 md:px-10 lg:px-20">
      <div className="mb-4">
        <Link
          href="/accommodation"
          className="inline-flex items-center gap-2 text-sm text-[#000033] hover:opacity-80"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to results
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={place.imageUrl}
              alt={place.name}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
              priority
            />
            <span className="absolute top-3 right-3 bg-white/80 text-xs px-2 py-1 rounded-md">
              {place.numOfImages ?? 1} images
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{place.name}</h1>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <MapPin size={16} color="black" />
              {place.location}
            </p>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="text-orange-500">★★★★★</div>
                <span className="text-xs">
                  {place.numberOfStars} Star Hotel
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="border border-blue-500 px-2 py-1 rounded font-medium">
                  {place.rate}
                </span>
                <span className="font-bold">Very Good</span>
                <span className="text-gray-500">{place.reviews} reviews</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="font-semibold mb-3">Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {Array.from({ length: Math.max(1, place.aminities) })
                .slice(0, 6)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Included amenity {idx + 1}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500">starting from</p>
                <p className="text-[#396FF9] font-bold text-xl flex items-center gap-1">
                  <span>${place.price}</span>
                  <span className="text-xs text-gray-600">/night</span>
                </p>
                <p className="text-xs text-gray-500">excl. tax</p>
              </div>
              <Button
                variant={"outline"}
                size={"icon"}
                className="p-3 border border-red-500 rounded-lg hover:bg-gray-100"
              >
                <Heart className="w-5 h-5 text-red-500" />
              </Button>
            </div>

            <Button className="w-full bg-[#699BFE] hover:bg-[#699BFE]/90 text-black">
              Book now
            </Button>

            <div className="text-xs text-gray-600">
              <p className="font-semibold mb-1">Why book with Iwacu Hub</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Trusted local stays curated for comfort</li>
                <li>Secure payment and instant confirmation</li>
                <li>24/7 support for your trips</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AccommodationDetailsPage;
