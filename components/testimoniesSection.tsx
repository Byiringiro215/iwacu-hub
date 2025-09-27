import { Quote, TextQuote } from 'lucide-react'
import React from 'react'
import CardSlider from './ui/coursel';
import Image from 'next/image';

interface TestimonyProps{
  proficPic:string;
  postion:string;
  name:string;
  testimony:string;
  
}

const testimonies:TestimonyProps[]=[
  {proficPic:'/pp1.jpg', postion:'founder@stretch', name:'Kwizera Charles', testimony:'"This app made selling my property a breeze. The process was seamless, and I got a great deal in no time!'},
 {proficPic:'/pp2.jpg', postion:'founder@kpc', name:'Cury Hallis', testimony:'Renting out my land was effortless with this platform. Highly recommend it to anyone in real estate!'},
  {proficPic:'/pp2.jpg', postion:'founder@klab', name:'Chris AHAYO', testimony:'Buying my dream property was so easy thanks to this app. The interface is intuitive and efficient!'},
  {proficPic:'/pp1.jpg', postion:'founder@stretch', name:'Kwizera Charles', testimony:'"This app made selling my property a breeze. The process was seamless, and I got a great deal in no time!'},
 {proficPic:'/pp2.jpg', postion:'founder@kpc', name:'Cury Hallis', testimony:'Renting out my land was effortless with this platform. Highly recommend it to anyone in real estate!'},
  {proficPic:'/pp2.jpg', postion:'founder@klab', name:'Chris AHAYO', testimony:'Buying my dream property was so easy thanks to this app. The interface is intuitive and efficient!'},
]

const TestimoniesSection = () => {
  return (
        <div className="py-10 space-y-4">
      <h1 className="font-bold text-2xl  flex justify-center gap-2">
         <span><Quote color='#000033'/></span>
         <span>OUR TESTIMONIALS</span>
    </h1>
    <div className='my-20'>
      <CardSlider
        items={testimonies}
        slidesPerView={3}
        spaceBetween={20}
        showDots={true}
        showArrows={false}
        renderSlide={(testi) => (
          <div className="bg-white  p-4  rounded-lg space-y-7 mb-20">
            <div className='flex gap-2 items-center'>
              <Image
              src={testi.proficPic}
              alt={testi.name}
              className='w-10 h-10 rounded-full object-cover'
              width={40}
              height={40}
              />
              <div className='leading-tight'>
              <h3 className='text-xs font-semibold '>{testi.name}</h3>
              <p className='text-[12px] text-gray-600'>{testi.postion}</p>
              </div>
            </div>
            <p className='text-[#8C8C8C] text-sm'>{testi.testimony}</p>
            </div>
        )}
      />
    </div>
      
    </div>
  )
}

export default TestimoniesSection
