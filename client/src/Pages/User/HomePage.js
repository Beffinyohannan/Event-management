import React from 'react'
import Feed from '../../Components/User/Feed/Feed'
import Header from '../../Components/User/Header/Header'
import BottomNavbar from '../../Components/User/Sidebar/BottomNavbar'
import Sidebar from '../../Components/User/Sidebar/Sidebar'

function HomePage() {
  return (
    <div >
        <Header/>
        <div className='flex'>
        <Sidebar />
        <div className='md:pl-[280px] pt-3 '>
        <Feed />
        </div>
        </div>
        <BottomNavbar/>
        
    </div>
  )
}

export default HomePage