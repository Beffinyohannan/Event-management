import React from 'react'
import CompanyFeed from '../../Components/Company/Feed/CompanyFeed'
import HeaderCompany from '../../Components/Company/Header/HeaderCompany'
import PostCompanySide from '../../Components/Company/Posts/PostCompanySide'
import Rightbar from '../../Components/Company/Rightbar/Rightbar'
import CompanyBottomNavbar from '../../Components/Company/Sidebar/CompanyBottomNavbar'
import CompanySidebar from '../../Components/Company/Sidebar/CompanySidebar'

function CompanyHomePage() {
    return (
        <div>
            <HeaderCompany/>
        <div className='flex '>
            <div>
                <CompanySidebar />
            </div>
            {/* <CompanyFeed/> */}
            <div className='flex w-full  justify-center'>
                <PostCompanySide />
            </div>
             <Rightbar />

            

            <CompanyBottomNavbar />
        </div>
        </div>
    )
}

export default CompanyHomePage