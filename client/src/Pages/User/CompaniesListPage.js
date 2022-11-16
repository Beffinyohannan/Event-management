import React from 'react'
import CompanyList from '../../Components/User/CompanyList/CompanyList'
import Header from '../../Components/User/Header/Header'
import BottomNavbar from '../../Components/User/Sidebar/BottomNavbar'
import Sidebar from '../../Components/User/Sidebar/Sidebar'

function CompaniesListPage() {
  return (
    <div className='flex'>
        <Header/>
        <Sidebar/>
        <div className='md:pl-[350px] pt-3  '>
        <CompanyList/>
        </div>

        <BottomNavbar/>
    </div>
  )
}

export default CompaniesListPage