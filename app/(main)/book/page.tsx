"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Heart,
  Share2,
  Star,
  MapPin,
  Sparkles,
  Dumbbell,
  Wifi,
  Coffee,
  UtensilsCrossed,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Flag,
} from "lucide-react";

const BookingPage = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const reviewsPerPage = 5;

  const hotelImages = [
    { src: "/apart1.png", alt: "Hotel pool view", main: true },
    { src: "/apart2.png", alt: "Hotel room 1" },
    { src: "/apart3.png", alt: "Hotel room 2" },
    { src: "/apart4.png", alt: "Hotel room 3" },
    { src: "/acco1.png", alt: "Hotel room 4" },
  ];

  const features = [
    { icon: <MapPin className="w-5 h-5" />, label: "Near park" },
    { icon: <Star className="w-5 h-5" />, label: "Near nightlife" },
    { icon: <Star className="w-5 h-5" />, label: "Near theater" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Clean Hotel" },
  ];

  const availableRooms = [
    {
      id: 1,
      image: "/acco1.png",
      name: "Superior room - 1 double bed or 2 twin beds",
      price: 240,
    },
    {
      id: 2,
      image: "/acco2.png",
      name: "Superior room - City view - 1 double bed or 2 twin beds",
      price: 280,
    },
    {
      id: 3,
      image: "/acco3.png",
      name: "Superior room - City view - 1 double bed or 2 twin beds",
      price: 320,
    },
    {
      id: 4,
      image: "/apart1.png",
      name: "Superior room - City view - 1 double bed or 2 twin beds",
      price: 350,
    },
  ];

  const amenities = [
    { icon: <Dumbbell className="w-5 h-5" />, label: "Outdoor pool" },
    { icon: <Dumbbell className="w-5 h-5" />, label: "Indoor pool" },
    {
      icon: <Sparkles className="w-5 h-5" />,
      label: "Spa and wellness center",
    },
    { icon: <UtensilsCrossed className="w-5 h-5" />, label: "Restaurant" },
    { icon: <BedDouble className="w-5 h-5" />, label: "Room service" },
    { icon: <Dumbbell className="w-5 h-5" />, label: "Fitness center" },
    { icon: <Coffee className="w-5 h-5" />, label: "Bar/Lounge" },
    { icon: <Wifi className="w-5 h-5" />, label: "Free Wi-Fi" },
    { icon: <Coffee className="w-5 h-5" />, label: "Tea/Coffee machine" },
  ];

  const reviews = [
    {
      id: 1,
      rating: 5.0,
      title: "Amazing",
      author: "Omar Siphron",
      avatar: "/pp1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      rating: 5.0,
      title: "Amazing",
      author: "Cristofer Ekstrom Bothman",
      avatar: "/pp2.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      rating: 5.0,
      title: "Amazing",
      author: "Kaiya Lubin",
      avatar: "/pp3.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      rating: 5.0,
      title: "Amazing",
      author: "Erin Septimus",
      avatar: "/pp1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      rating: 5.0,
      title: "Amazing",
      author: "Terry George",
      avatar: "/pp2.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      rating: 4.8,
      title: "Excellent",
      author: "Sarah Johnson",
      avatar: "/pp3.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 7,
      rating: 4.5,
      title: "Great Stay",
      author: "Michael Brown",
      avatar: "/pp1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 8,
      rating: 5.0,
      title: "Perfect",
      author: "Emma Wilson",
      avatar: "/pp2.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 9,
      rating: 4.7,
      title: "Wonderful",
      author: "David Lee",
      avatar: "/pp3.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 10,
      rating: 5.0,
      title: "Outstanding",
      author: "Lisa Anderson",
      avatar: "/pp1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 11,
      rating: 4.9,
      title: "Superb",
      author: "James Martinez",
      avatar: "/pp2.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  // Calculate pagination
  const totalReviewPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentReviewPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="px-6 md:px-14 py-4 border-b">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-[#1B55E9] cursor-pointer hover:underline">
            Turkey
          </span>
          <span>›</span>
          <span className="text-[#1B55E9] cursor-pointer hover:underline">
            Istanbul
          </span>
          <span>›</span>
          <span className="text-gray-900">
            CVK Park Bosphorus Hotel Istanbul
          </span>
        </div>
      </div>

      {/* Hotel Header */}
      <div className="px-6 md:px-14 py-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              CVK Park Bosphorus Hotel Istanbul
            </h1>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">5 Star Hotel</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                Gümüşsuyu Mah. İnönü Cad. No:8, Istanbul 34437
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#1B55E9] text-white px-2 py-1 rounded font-semibold text-sm">
                4.2
              </div>
              <span className="font-semibold text-sm">Very Good</span>
              <span className="text-sm text-gray-600">371 reviews</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="text-right">
              <div className="text-3xl font-bold text-[#FF4757]">
                $240<span className="text-lg text-gray-600">/night</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                  }`}
                />
              </button>
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <Link href="/book/checkout">
                <Button className="px-8">Book now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-6 md:px-14 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Main Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={hotelImages[0].src}
              alt={hotelImages[0].alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Side Images Grid */}
          <div className="grid grid-cols-2 gap-3">
            {hotelImages.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative h-[195px] rounded-lg overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                {index === 3 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button className="text-white font-semibold text-sm hover:underline">
                      View all photos
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="px-6 md:px-14 py-8 border-t">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
          Bosphorus Hotel Istanbul has risen from the ashes of the historic Park
          Hotel, which also served as Foreign Affairs Palace 120 years ago and
          is hosting its guests by assuming this hospitality mission. With its
          452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18
          meeting rooms including 4 dividable ones and 3 terraces with Bosphorus
          view, Istanbuls largest terrace with Bosphorus view (4500 m2) and
          latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is
          destined to be the popular attraction of the city and Bosphorus. As
          well as 24 separate living suites, are offered to the special guests
          as a wide variety of selection.
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 bg-[#1B55E9] text-white px-6 py-4 rounded-lg">
            <div className="text-3xl font-bold">4.2</div>
            <div>
              <div className="font-semibold">Very good</div>
              <div className="text-sm opacity-90">371 reviews</div>
            </div>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border border-gray-300 px-6 py-4 rounded-lg hover:border-gray-400 transition-colors"
            >
              <div className="text-gray-700">{feature.icon}</div>
              <span className="font-medium text-gray-900">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Available Rooms Section */}
      <div className="px-6 md:px-14 py-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>
        <div className="space-y-4">
          {availableRooms.map((room) => (
            <div
              key={room.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-900 font-medium">{room.name}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900">
                    ${room.price}
                  </span>
                  <span className="text-gray-600">/night</span>
                </div>
                <Link href="/book/checkout">
                  <Button className="px-6">Book now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location/Map Section */}
      <div className="px-6 md:px-14 py-8 border-t">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Location/Map</h2>
          <Button
            variant="outline"
            className="border-[#000033] text-[#000033]"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Gümüşsuyu+Mah.+İnönü+Cad.+No:8,+Istanbul+34437",
                "_blank"
              )
            }
          >
            View on google maps
          </Button>
        </div>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Gümüşsuyu+Mah.+İnönü+Cad.+No:8,+Istanbul+34437&zoom=15"
          />
        </div>

        <div className="flex items-start gap-2 mt-4 text-gray-700">
          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">
            Gümüşsuyu Mah. İnönü Cad. No:8, Istanbul 34437
          </p>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="px-6 md:px-14 py-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {amenities.slice(0, 8).map((amenity, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-gray-700">{amenity.icon}</div>
              <span className="text-gray-900">{amenity.label}</span>
            </div>
          ))}
        </div>
        <button className="text-[#1B55E9] font-medium mt-4 hover:underline">
          +24 more
        </button>
      </div>

      {/* Reviews Section */}
      <div className="px-6 md:px-14 py-8 border-t">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Reviews</h2>
          <Button className="px-6">Give your review</Button>
        </div>

        {/* Overall Rating */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-5xl font-bold">4.2</div>
          <div>
            <div className="font-semibold text-lg">Very good</div>
            <div className="text-sm text-gray-600">371 verified reviews</div>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-200 pb-6 last:border-b-0"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">
                        {review.rating} {review.title}
                      </span>
                      <span className="text-gray-600">|</span>
                      <span className="text-gray-600">{review.author}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Flag className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() =>
              setCurrentReviewPage(Math.max(1, currentReviewPage - 1))
            }
            disabled={currentReviewPage === 1}
            className="p-2 hover:bg-gray-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-700">
            {currentReviewPage} of {totalReviewPages}
          </span>
          <button
            onClick={() =>
              setCurrentReviewPage(
                Math.min(totalReviewPages, currentReviewPage + 1)
              )
            }
            disabled={currentReviewPage === totalReviewPages}
            className="p-2 hover:bg-gray-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
