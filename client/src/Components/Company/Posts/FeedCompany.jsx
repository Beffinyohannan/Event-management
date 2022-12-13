import React, { useState } from 'react'
import feedImage from '../../../assets/stone.webp'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js';
import { FcLike } from "react-icons/fc"


import { HiPhotograph } from "react-icons/hi";

import { AiOutlineHeart, AiOutlinePlus, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'
import { BsBookmark, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { logDOM } from '@testing-library/react';

function FeedCompany({obj}) {
    const [likes, setlikes] = useState('')
    const [comment, setComment] = useState('')
    const [viewComment, setViewComment] = useState(false)
    const [viewAllComment, setViewAllComment] = useState('')
    const [viewCmt, setViewCmt] = useState(false)
    const [error, setError] = useState({})
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState()

    const [showModal, setShowModal] = useState(false)
    return (
        <div className=' bg-white mb-5 mt-5 rounded-2xl border-slate-200 border-t shadow-md '>
            <div className='p-5'>
                <div className='flex items-center space-x-2'>
                    <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full ' width={40} height={40} alt="" />
                    <div>
                        <p className='font-medium'>Create Post</p>
                        <p className='text-xs text-gray-400'>22/11/22</p>
                    </div>
                </div>
                <p className='pt-4'>aaaaaaaaaaaaaaaaaaaaaaa cgcgcg</p>
            </div>
            <div className='relative w-full   bg-white '>
                <img className='object w-[600px] h-[350px]' src='https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp' alt="" />
            </div>
            <div className='flex justify-between rounded-b-2xl items-center  bg-white  text-gray-400 border-t '>
                        <div className='w-20  flex justify-between items-center space-x-4 p-2'>
                            <div className='text-2xl flex text-slate-900 hover:cursor-pointer ' 
                            // onClick={(e) => { handleLike(obj._id) }} 
                             >
                                {likes ? <FcLike /> : <AiOutlineHeart />}
                                {count == '0' ? '' :
                                    <span className='text-lg ml-2'>{count}</span>
                                }
                            </div>
                            <div className='text-xl flex text-slate-900 cursor-pointer ' 
                            // onClick={handleviewComment}
                            >
                                <div className='py-1'>
                                    <FaRegComment />
                                </div>
                                {
                                    viewAllComment.length == '0' ? '' :

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
                                        // onChange={handleSetComment}
                                        placeholder='comment...'
                                        className='w-full rounded-md p-1 text-gray-800 bg-slate-100'

                                    ></textarea>
                                    <div className='pl-3 py-1 pr-2 '>
                                        {comment ?
                                            <button className=' font-semibold text-blue-700 hover:text-blue-900 disabled:opacity-50' 
                                            
                                            >Post</button> :
                                            <p className='font-semibold'>Post</p>
                                        }
                                    </div>
                                </form>
                              
                            </div>

                        </div> : ''

                    }
        
        </div>
    )
}

export default FeedCompany