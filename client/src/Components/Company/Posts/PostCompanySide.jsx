import React, { useState,useEffect } from 'react'
import feedImage from '../../../assets/stone.webp'
import { HiPhotograph } from "react-icons/hi";

import { AiOutlineHeart, AiOutlinePlus, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'
import { BsBookmark, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'

function PostCompanySide() {

    const [likes, setlikes] = useState('')

    return (
        <div className=' flex flex-col items-center justify-center'>

            <div className='flex flex-col   w-[480px] md:w-2/5 '>
                <div className='p-5 bg-white  mt-5 rounded-2xl border-slate-200 border-t shadow-md '>
                    <div className='flex items-center space-x-2'>
                        {/* <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full ' width={40} height={40} alt="" /> */}
                        <div>
                            <p className='font-medium'>Create Post</p>
                            {/* <p className='text-xs text-gray-400'>22/11/22</p> */}
                        </div>
                    </div>
                    <div className='p-2'>
                     <textarea className='border w-[430px] h-12 md:w-full' name="" id=""  cols="70" rows="21"></textarea>
                    </div>
                    <div className='flex justify-between'>
                    <label className='p-2 cursor-pointer' htmlFor="img-upload"><HiPhotograph size={26}  />  </label>
                       <input type="file" id="img-upload" className='hidden'/> 
                        <button className='bg-slate-900 text-white px-4'>Post</button>
                    </div>

                </div>
               

              
            </div>


            <div className='flex flex-col   w-[480px] md:w-2/5  '>
                <div className='p-5 bg-white  mt-5 rounded-t-2xl border-slate-200 border-t shadow-md '>
                    <div className='flex items-center space-x-2'>
                        <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full ' width={40} height={40} alt="" />
                        <div>
                            <p className='font-medium'>name</p>
                            <p className='text-xs text-gray-400'>22/11/22</p>
                        </div>
                    </div>
                    <p className='pt-4'>aaaaaaaaaaaaaaaaaaaaaaa cgcgcg</p>
                </div>
                <div className='relative  bg-white '>
                    <img className="w-screen" src={feedImage} alt="" />
                </div>

                <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t '>
                    <div className='w-20  flex justify-between items-center space-x-4 p-2'>
                        <div className='text-2xl text-slate-900 hover:cursor-pointer ' >
                            {
                                likes ? <AiOutlineHeart /> : <AiFillHeart className='text-red-600' />
                            }
                        </div>
                        <div className='text-xl'><FaRegComment /> </div>
                        <div className='text-xl'><FiSend /> </div>

                    </div>
                    <div className='text-xl p-2 '><BsBookmark /> </div>
                </div>
            </div>


            {/* second */}
            <div className='flex flex-col  w-[480px] md:w-2/5 '>
                <div className='p-5 bg-white  mt-5 rounded-t-2xl border-slate-200 border-t shadow-md'>
                    <div className='flex items-center space-x-2'>
                        <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full' width={40} height={40} alt="" />
                        <div>
                            <p className='font-medium'>name</p>
                            <p className='text-xs text-gray-400'>22/11/22</p>
                        </div>
                    </div>
                    <p className='pt-4'>aaaaaaaaaaaaaaaaaaaaaaa cgcgcg</p>
                </div>
                <div className='  bg-white '>
                    <img className=" w-screen" src="https://imgs.search.brave.com/YDsFrXUqf54MxJzN1hHLTFbSaGz1V7hn-N0YucRh4Xc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/ZFh3NDZSQXoxQlhi/SDBLbXpEMUdBSGFF/SyZwaWQ9QXBp" alt="" />
                </div>

                <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t '>
                    <div className='w-20  flex justify-between items-center space-x-4 p-2'>
                        <div className='text-2xl text-slate-900 hover:cursor-pointer ' >
                            {
                                likes ? <AiOutlineHeart /> : <AiFillHeart className='text-red-600' />
                            }
                        </div>
                        <div className='text-xl'><FaRegComment /> </div>
                        <div className='text-xl'><FiSend /> </div>

                    </div>
                    <div className='text-xl p-2 '><BsBookmark /> </div>
                </div>
            </div>

        </div>
    )
}

export default PostCompanySide