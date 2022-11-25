import React,{useEffect} from 'react'
import Feed from '../../Components/User/Feed/Feed'
import Header from '../../Components/User/Header/Header'
import Post from '../../Components/User/Post/Post'
import RightbarUser from '../../Components/User/Rightbar/RightbarUser'
import BottomNavbar from '../../Components/User/Sidebar/BottomNavbar'
import Sidebar from '../../Components/User/Sidebar/Sidebar'
import axios from '../../api/axios'

function HomePage() {
//   useEffect((e) => {
//     axios.get('/viewPosts').then((response) => {
//         console.log(response.data);
//         setPosts(response.data)
//     })
// }, [])

  return (
    <div >
        <Header/>
        <Sidebar />
        <div className=' flex justify-center md:justify-end bg-slate-50'>
        <div className='w-full sm:w-4/5  flex justify-center lg:justify-start '>
          
        {/* <Post/> */}
        <Feed/>
        </div>
        <RightbarUser/>
        </div>
        <BottomNavbar/>
        
    </div>
  )
}

export default HomePage