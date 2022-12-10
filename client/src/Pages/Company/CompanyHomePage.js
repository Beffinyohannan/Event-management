import React from 'react'
import CompanyFeed from '../../Components/Company/Feed/CompanyFeed'
import HeaderCompany from '../../Components/Company/Header/HeaderCompany'
import PostCompanySide from '../../Components/Company/Posts/PostCompanySide'
import Rightbar from '../../Components/Company/Rightbar/Rightbar'
import CompanyBottomNavbar from '../../Components/Company/Sidebar/CompanyBottomNavbar'
import CompanySidebar from '../../Components/Company/Sidebar/CompanySidebar'
import Feed from '../../Components/User/Feed/Feed'

function CompanyHomePage() {
    return (
        <div>
           
            <div >
                <HeaderCompany />
                <CompanySidebar />
                <div className=' flex justify-center md:justify-end bg-slate-50'>
                    <div className='w-full sm:w-4/5  flex justify-center lg:justify-start '>
                        <Feed />
                    </div>
                    <Rightbar />
                </div>
                <CompanyBottomNavbar />

            </div>
        </div>

    )
}

export default CompanyHomePage