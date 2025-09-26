import React from 'react'
import { Button } from './ui/button'
const HeroSection = () => {
  return (
    <div className='px-8 pt-40 pyb-10 flex  gap-5 items-center '>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold'>DISCOVER PROPERTIES AROUND YOU</h1>
        <p className='text-[#8A8A8A] text-sm'>Explore a wide range of properties for sale and rent in Rwanda and across Africa.</p>
        <div className='flex gap-3 items-center'>
            <input 
            className='placeholder:text-[#8A8A8A] focus:outline-none border-2 border-[#E0E0E0] focus:border-[#302F2F] rounded-md px-4 py-2 w-96'
            type="text"
            placeholder='Which place Is On Your Mind ?'
            />
            <Button className='h-10'>Search</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
