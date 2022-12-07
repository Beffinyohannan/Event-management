import React from 'react'
import Chat from '../../Components/Chat/Chat'
import ChatCompany from '../../Components/Chat/ChatCompany'
import CompanyBottomNavbar from '../../Components/Company/Sidebar/CompanyBottomNavbar'
import CompanySidebar from '../../Components/Company/Sidebar/CompanySidebar'

function ChatCompanyPage() {
  return (
    <div>
        <CompanySidebar/>
        {/* <Chat/> */}
        <ChatCompany/>
        <CompanyBottomNavbar/>
    </div>
  )
}

export default ChatCompanyPage