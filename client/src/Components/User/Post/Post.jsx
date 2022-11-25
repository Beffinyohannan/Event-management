import React, { useState, useEffect, useContext } from 'react'
// import feedImage from '../../../assets/stone.webp'

import { AiOutlineHeart, AiOutlinePlus, AiFillHeart } from 'react-icons/ai'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { FcLike } from "react-icons/fc"

import { FiSend } from 'react-icons/fi'
import { BsBookmark, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import axios from '../../../api/axios'
import { format } from 'timeago.js'
import { UserContext } from '../../../Store/UserContext'

function Post({ obj }) {

    // console.log(obj, 'objjjjjjjjjjjjj');

    const [likes, setlikes] = useState(false)
    const [count, setCount] = useState(obj.likes.length)
    // const [posts, setPosts] = useState([])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    console.log(PF, 'asdfghjxcvbnmwertyui');
    const { userDetails, setUserDetails } = useContext(UserContext)
    console.log(userDetails, '00000000000000');
    const userId = userDetails._id
    const [comment, setComment] = useState('')
    const [viewComment, setViewComment] = useState(false)
    const [viewAllComment, setViewAllComment] = useState('')
    const [viewCmt,setViewCmt] = useState(false)
    const [error,setError]=useState({})
   

    useEffect(() => {
        console.log('useeffect called');
        setlikes(obj.likes.includes(userId))
        // setViewAllComment(obj.comments)
        // console.log(likes, 'likessssss');
    }, [])

    useEffect(()=>{
        console.log('useeeeeeeeeeeeeeeeeeeeee');
        axios.get(`/post/viewComments/${obj._id}`).then((res)=>{
            // console.log(res.data,'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
             const data = res.data[0]
            //  console.log(data.comments,'222222222222222222222222222222222');
            setViewAllComment(res.data[0].comments)
        })
    },[viewCmt])
    // console.log(viewAllComment,'11111111111111111111111111');

    const handleLike = (id) => {
        console.log('hiiiiiiiiiiiiii');
        axios.put('/post/like/' + id, { userId }).then((res) => {
            if (res.status == '200') {
                console.log(res);
                setlikes(!likes)
                setCount(likes ? count - 1 : count + 1)
                // console.log(count, 'qwertyuiop');

            }
        })
    }

    const handleComment = (e) => {
        e.preventDefault()

        const datas = {

            postBy: userId,
            username: userDetails.username,
            comment: comment
        }

        const errors = validateForm(comment)
        setError(errors)
        console.log(error,'mmmmmmmmmmmmmmmmmmmmmmmmm');
        console.log(Object.keys(errors).length, 'llkklk');
        if (Object.keys(errors).length == 0) {
            axios.put(`/post/comment/${obj._id}`, datas).then((res) => {
                console.log(res);
                setComment('')
                setViewCmt(!viewCmt)
            })
        }


    }

    const handleSetComment = (e) => {
        console.log('call');
        if (/^\s/.test(e.target.value)){
            setComment('')
            // setViewAllComment(obj.comments)

    }else {
        setComment(e.target.value)
    }
    }

const handleviewComment = (e) => {
    e.preventDefault()
    setViewComment(!viewComment)

}

const validateForm = (data) => {
    const error = {};
    if (!data) {
        error.comment = "write your comment"
    } 
    
    return error;
}

return (
    <div className=' sm:w-full  lg:w-10/12  flex flex-col items-center xl:items-start  '>

        {/* {
                posts.map((obj, index) => {
                    return ( */}

        <div className='flex flex-col items-center lg:pl-12 xl:pl-0 xl:pr-28'>
            <div className='flex flex-col mt-3    w-full md:w-4/5 lg:w-9/12 xl:w-4/6 border rounded-2xl '>
                <div className='p-5 bg-white   rounded-t-2xl border-slate-200 border-t shadow-md'>
                    <div className='flex items-center space-x-2'>
                        <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full' width={40} height={40} alt="" />
                        <div>
                            {/* <p className='font-medium'>{obj.companyId.companyName}</p> */}
                            <p className='font-medium'>{obj.companyName}</p>
                            <p className='text-xs text-gray-400'>{format(obj.date)}</p>
                        </div>
                    </div>
                    <p className='pt-4'>{obj.description}</p>
                </div>
                <div className='relative w-full   bg-white '>
                    <img className='object w-[800px] h-[300px]' src={'http://localhost:5000/images/' + obj.image} alt="" />
                </div>

                <div className='flex justify-between rounded-b-2xl items-center  bg-white  text-gray-400 border-t '>
                    <div className='w-20  flex justify-between items-center space-x-4 p-2'>
                        <div className='text-2xl flex text-slate-900 hover:cursor-pointer ' onClick={(e) => { handleLike(obj._id) }}  >
                            {likes ? <FcLike /> : <AiOutlineHeart />}
                            {count == '0' ? '' :
                                <span className='text-lg ml-2'>{count}</span>
                            }
                        </div>
                        <div className='text-xl flex text-slate-900 cursor-pointer ' onClick={handleviewComment}>
                           <div className='py-1'>
                           <FaRegComment />
                            </div>  
                            {
                                viewAllComment.length == '0' ? '':

                            <span className='ml-2 text-lg'>{viewAllComment.length}</span>
                            }
                        </div>
                        <div className='text-xl'><FiSend /> </div>

                    </div>
                    <div className='text-xl p-2 '><BsBookmark /> </div>
                </div>
                {viewComment ?


                    <div className='flex flex-col'>
                        <div className=' max-h-32 overflow-auto scrollbar-hide' >
                            {viewAllComment.map((com, i) => {
                                return (

                                    <div className="flex gap-3 py-2 pl-3 items-center bg-white">
                                        <div>
                                            {/* <img className="w-8 rounded-full" src='' alt="profile" /> */}
                                            <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full' width={30} height={30} alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <span className="font-medium text-sm mr-2">{com.name}</span>
                                                <span className="">{com.comment}</span>
                                            </div>
                                            <p className="text-slate-500 text-xs ">{format(com.created)}</p>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>

                        <div className=' flex rounded-b-2xl pl-5 p-1 pb-2  bg-white shadow-md text-gray-400 '>
                            <form className='flex justify-between w-full'>
                               
                                <textarea
                                    name='comment'
                                    id='comment'
                                    rows='1'
                                    value={comment}
                                    onChange={handleSetComment}
                                    placeholder='comment...'
                                    className='w-full rounded-md p-1 text-gray-800 bg-slate-100'
                                    
                                ></textarea>
                                <div className='pl-3 py-1 pr-2 '>
                                    {comment ? 
                                    <button className=' font-semibold text-blue-700 hover:text-blue-900 disabled:opacity-50' onClick={handleComment}>Post</button> : 
                                    // <button className='font-semibold'  onClick={handleComment}>Post</button>
                                    <p className='font-semibold'>Post</p>
                                     }
                                </div>
                            </form>
                            {/* <input className='w-full rounded-md p-1 bg-slate-100' type="text" placeholder='write Your Comment...' />
                                    <p className='text-gray-900 font-semibold pl-2' onClick={handlecomment}>Post</p> */}
                        </div>

                    </div> : ''

                }
            </div>
        </div>
        {/* 
                    )
                })
            } */}


    </div>





)
}

export default Post