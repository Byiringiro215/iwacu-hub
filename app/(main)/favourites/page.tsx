import HotelCard from "@/components/placeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export interface placeProps{
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    rate: number;
    aminities:number;
    reviews:number;
    price: number;
    numberOfStars: number;
    numOfImages?: number;
}

const places:placeProps[]=[
    {
        id: 1,
        name: "Hotel Iwacu",
        description: "A luxurious hotel with stunning views and top-notch amenities.",
        imageUrl: "/placee1.png",
        rate: 4.5,
        aminities: 10,
        reviews: 150,
        price: 200,
        numberOfStars: 5,
        numOfImages: 6,
    },
    {
        id: 2,
        name: "Resort Paradis", 
        description: "A tropical paradise with beautiful beaches and relaxing atmosphere.",
        imageUrl: "/placee2.png",
        rate: 4.7,
        aminities: 12,
        reviews: 200,
        price: 300,
        numberOfStars: 5,
        numOfImages: 7,
    },
    {
        id: 3,
        name: "Mountain Retreat",
        description: "A cozy retreat nestled in the mountains, perfect for nature lovers.",
        imageUrl: "/placee3.png",
        rate: 4.3,
        aminities: 8,
        reviews: 100,
        price: 150,
        numberOfStars: 4,
        numOfImages: 5,
    },
]

const page = () => {
  return (
    <div className="px-20 pt-20">
      <h1 className="font-bold text-2xl">Favourites</h1>
      <Tabs defaultValue="places" className="w-full ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="category">Category</TabsTrigger>
          <TabsTrigger value="places">Places</TabsTrigger>
        </TabsList>

        <TabsContent value="category">
          <p className="p-4 bg-gray-100 rounded-md">
    category
          </p>
        </TabsContent>
        <TabsContent value="places">
         { places.map((place)=>(
            <div key={place.id} className="mb-4">
              <HotelCard 
              id={place.id}
                name={place.name}
                description={place.description}
                imageUrl={place.imageUrl}
                rate={place.rate}
                aminities={place.aminities}
                reviews={place.reviews}
                price={place.price}
                numberOfStars={place.numberOfStars}
                numOfImages={place.numOfImages}
              />
            </div>
         ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
