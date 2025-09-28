"use client";
import Footer from '@/components/footer'
import SubscribeSection from '@/components/subscribeSection'
import React from 'react'
import { AuthProvider } from '@/context/auth'
import Navbar from '@/components/navbar'
import { useAuth } from '@/context/auth'

const LayoutInner = ({children}:{children:React.ReactNode}) => {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} user={user || undefined} onLogout={logout} />
      <main className='min-h-screen pt-30'>{children}</main>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}

const layout = ({children}:{children:React.ReactNode}) => (
  <AuthProvider>
    <LayoutInner>{children}</LayoutInner>
  </AuthProvider>
)

export default layout
