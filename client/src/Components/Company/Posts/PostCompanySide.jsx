import React, { useState,useEffect,useContext } from 'react'
import feedImage from '../../../assets/stone.webp'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link,useNavigate } from 'react-router-dom'
import { HiPhotograph } from "react-icons/hi";

import { AiOutlineHeart, AiOutlinePlus, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'
import { BsBookmark, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { logDOM } from '@testing-library/react';
import { CompanyContext } from '../../../Store/CompanyContext'


function PostCompanySide() {

    const [likes, setlikes] = useState('')
    const [showImage, setShowImage] = useState()
    const [file,setFile] = useState('')
    const [description,setDescription] =useState('')
    const navigate = useNavigate()
    const {companyDetails,setCompanyDetails} =useContext(CompanyContext)


    const onInuputChange =(e)=>{
        // console.log( e.target.files[0]);
        
        setShowImage(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])
        
        console.log(file);
    }
    

     
    const onFormsubmit=(e)=>{
        e.preventDefault()

        // const postDetails ={
        //     // userId:userData._id,
        //     descriptions:description
            
        //  }
        //  console.log(description);

        const formData = new FormData()
        const id = companyDetails._id
        const name = companyDetails.companyName
        const des=description
        formData.append('image',file)
        formData.append('companyId',id)
        formData.append('companyName',name)
        formData.append('description',des)
        // postDetails.image=fileName
    
        const config ={
            header:{
                'content-type':'multipart/form-data',
            }
        }
        axios.post('http://localhost:5000/company/post-upload',formData).then((response)=>{
            console.log('image added');
            console.log(response.data);
            if (response.data.posted==true) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Post Added',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(()=>{
                  
                    setShowImage('')
                    setDescription('')
                    navigate('/company/homepage')
                  })
            }
        }).catch((err)=>{
            console.log(err.message);
        })
    }

   
    return (
        <div className=' flex flex-col items-center justify-center mt-16'>

            <div className='flex flex-col   w-3/4 md:w-2/5 '>
                <div className='p-5 bg-white  mt-5 rounded-2xl border-slate-200 border-t shadow-md '>
                    <div className='flex items-center space-x-2'>
                        {/* <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full ' width={40} height={40} alt="" /> */}
                        <div>
                            <p className='font-medium'>Create Post</p>
                            {/* <p className='text-xs text-gray-400'>22/11/22</p> */}
                        </div>
                    </div>
                    <div className='p-2'>
                     <textarea className='border w-full h-12 md:w-full' name="" id=""  cols="70" rows="21" value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                    </div>
                     <img src={showImage} alt="" className='w-32' />
                    <div className='flex justify-between'>

                    <label className='p-2 cursor-pointer' htmlFor="img-upload"><HiPhotograph size={26}  />  </label>
                       <input type="file" id="img-upload" name='image' onChange={onInuputChange} className='hidden'/> 
                        <button className='bg-slate-900 text-white px-4 ' type='submit'onClick={onFormsubmit} >Post</button>
                       
                    </div>

                </div>
               

              
            </div>


            <div className='flex flex-col   w-3/4 md:w-2/5  '>
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
            <div className='flex flex-col  w-3/4 md:w-2/5 '>
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