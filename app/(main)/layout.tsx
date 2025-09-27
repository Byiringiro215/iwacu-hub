import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import SubscribeSection from '@/components/subscribeSection'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
      <main className='min-h-screen'>{children}</main>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}

export default layout
