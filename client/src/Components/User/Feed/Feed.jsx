import React,{useEffect,useState} from 'react'
import axios from '../../../api/axios'
import Header from '../Header/Header'
import Post from '../Post/Post'


function Feed() {

  const [posts, setPosts] = useState([])
  // console.log(posts,'zxcvbnm,');

  useEffect((e) => {
    // console.log('useeffect called');
    axios.get('/viewPosts').then((response) => {
        // console.log(response.data);
        setPosts(response.data)

    })
}, [])


  return (
    <div className='w-4/5 pt-24 flex flex-col items-center lg:justify-start '>
      { 
      posts.map((obj,i)=>(
        
        <Post key={obj.companyId} obj={obj}/>

      ))
      }
    </div>
  )
}

export default Feed