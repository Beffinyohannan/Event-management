import React from 'react'
import Header from '../../Components/User/Header/Header'
import Inbox from '../../Components/User/Inbox/Inbox'
import BottomNavbar from '../../Components/User/Sidebar/BottomNavbar'
import Sidebar from '../../Components/User/Sidebar/Sidebar'

function InboxPage() {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Inbox/>
        <BottomNavbar/>
    </div>
  )
}

export default InboxPage