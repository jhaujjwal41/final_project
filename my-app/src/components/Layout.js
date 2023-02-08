import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import FooterOverlap from './FooterOverlap'
import NavigationMenu from './Navigation'

const Layout = ({user, setUser}) => {
  return (
<>

<div className="bg-white py-2">
      <div className='flex flex-col  '>
      <NavigationMenu  user={user} setUser={setUser} />
      <Outlet/>
      <FooterOverlap />
      <Footer/>
        </div>
    </div>
</>  )
}

export default Layout

