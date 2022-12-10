import React,{useContext, useEffect,useState} from 'react'
import axios from '../../../api/axios'
import { UserContext } from '../../../Store/UserContext'
import Header from '../Header/Header'
import Post from '../Post/Post'


function Feed() {

  const [posts, setPosts] = useState([])
  const [block, setBlock] = useState('')
  
  const { userDetails, setUserDetails } = useContext(UserContext)
  const userId = userDetails._id
  // console.log(posts,'zxcvbnm,');

  useEffect((e) => {
    // console.log('useeffect called');
    axios.get(`/viewPosts/${userId}`).then((response) => {
        // console.log(response.data);
        setPosts(response.data)

    })
}, [block])


  return (
    <div className='w-full sm:w-4/5 pt-24 flex flex-col items-center lg:justify-start '>
      { 
      posts.map((obj,i)=>(
        
        <Post key={obj.companyId} setBlock={setBlock} obj={obj}/>

      ))
      }
    </div>
  )
}

export default Feed