import React, { useContext, useEffect, useState } from 'react'
import axios from '../../../api/axios';
import { CompanyContext } from '../../../Store/CompanyContext';
import { AiOutlineHeart, AiOutlinePlus, AiFillHeart } from 'react-icons/ai'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { FcLike } from "react-icons/fc"

import { FiSend } from 'react-icons/fi'
import { BsBookmark, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { format } from 'timeago.js'

function ProfileCompany() {

    const { companyDetails, setCompanyDetails } = useContext(CompanyContext)
    console.log(companyDetails, 1223123);
    const companyId = companyDetails._id
    const [post, setPost] = useState([])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [showSecondModal, setShowSecondModal] = useState(false)
    const [state, setState] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const showPost = (id) => {
        post.filter((obj) => {
            if (obj._id == id) {
                setModalData({
                    name: obj.companyName, description: obj.description, image: obj.image, comments: obj.comments, likes: obj.likes, date: obj.date
                })
                setShowSecondModal(true)
                console.log(modalData, '///////////////modaldata');
            }
        })
    }



    useEffect(() => {
        axios.get(`/company/profile/${companyId}`).then((res) => {
            console.log(res.data, 'gggggggggggggg');
            setCompanyDetails(res.data)
        })

        axios.get(`/company/profile-post/${companyId}`).then((post) => {
            console.log(post);
            setPost(post.data)
        })
    }, [])


    return (
        <div className=' flex justify-center md:justify-end'>

            <section className="pt-14 md:pt-0 w-full   md:w-4/5">
                <div className="w-full md:w-10/12 lg:pl-8 xl:pl-0 mx-auto ">
                    <div className="relative flex flex-col min-w-0 break-words  w-full  mb-6   mt-16">
                        <div className=" border bg-white shadow-lg rounded-lg ">
                            <div className=" flex  flex-wrap p-2 justify-center  ">
                                <div className='w-full'>
                                    <div className='w-full h-52' style={{ backgroundImage: `URL('https://imgs.search.brave.com/xDC2eSrEPNnxYNxdVbV6P_QQHY4D8TcRne76bTbmufk/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/UEl6VjZSY054a0ZJ/aTM1Q3ZGRnpRSGFF/OCZwaWQ9QXBp')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center' }}>
                                        {/* <img className='w-full h-32' src="https://imgs.search.brave.com/xDC2eSrEPNnxYNxdVbV6P_QQHY4D8TcRne76bTbmufk/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/UEl6VjZSY054a0ZJ/aTM1Q3ZGRnpRSGFF/OCZwaWQ9QXBp"  /> */}
                                    </div>
                                    <div className='flex '>
                                        <div className="w-full px-4 py-3 flex  justify-start">
                                            <div className="relative">
                                                <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" alt="" className="shadow-xl rounded-full  w-32 sm:w-40 h-32 sm:h-40 align-middle border-none " />
                                                {/* <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/> */}
                                            </div >
                                            <div className='ml-5 pt-2 '>
                                                <h3 className="text-xl font-semibold leading-normal  text-blueGray-700 mb-2">{companyDetails.companyName}</h3>
                                                <p>{companyDetails.email}</p>
                                                <div className='flex gap-5'>
                                                    <div className='flex gap-3 pt-2'>

                                                        <h4 className='font-semibold'>{companyDetails.followers.length}</h4>
                                                        <p>followers</p>
                                                    </div>
                                                    <div className='flex gap-3 pt-2'>

                                                        <h4 className='font-semibold'>{post.length}</h4>
                                                        <p>Posts</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                            <button className='m-5 bg-slate-400 rounded-md px-2'>Edit</button>
                                        </div>
                                    </div>
                                    <div className="text-start mt-5 pl-5">
                                        <h3 className="text-lg font-semibold leading-normal  text-blueGray-700 mb-2">
                                            {/* {userDetails.username} */}
                                            About
                                        </h3>
                                        <p>Company Type : {companyDetails.companyType}</p>
                                        <p>Phone : {companyDetails.phone}</p>
                                        <p>Register No. : {companyDetails.registerNo}</p>
                                        <p> Address : {companyDetails.companyAddress}</p>

                                    </div>
                                    <div className="w-full px-4 text-center mt-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">

                                            <div className="mr-4 p-3 text-center">
                                                {/* <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    10
                                                </span> */}
                                                <span className="text-sm font-semibold text-blueGray-400 underline">All Posts</span>
                                            </div>
                                            {/* <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    89
                                                </span>
                                                <span className="text-sm text-blueGray-400">Comments</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className=' pb-12 w-full flex justify-center  '>
                                        <div className='grid grid-cols-3  gap-2 '>
                                            {
                                                post.map((obj, index) => {
                                                    return (
                                                        <img className='w-64 h-24 sm:h-40' src={'http://localhost:5000/images/' + obj.image} onClick={(e) => { showPost(obj._id) }} />

                                                    )
                                                })
                                            }

                                        </div>
                                    </div>

                                    {showSecondModal ? (
                                        <>
                                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                    {/*content*/}
                                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">


                                                        {/*body*/}
                                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none" id="modal">
                                                            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                                                                <div className="relative pt-2 bg-transparent   ">

                                                                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"></h1>
                                                                    <div className=' w-full  bg-white flex flex-col  rounded-2xl border-slate-200 border shadow-md  '>

                                                                        <div className='flex flex-col items-center '>
                                                                            <div className='flex flex-col   w-full'>
                                                                                <div className='p-5 bg-white   rounded-t-2xl border-slate-200 border-t shadow-md'>
                                                                                    <div className='flex items-center space-x-2'>
                                                                                        <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full' width={40} height={40} alt="" />
                                                                                        <div>
                                                                                            {/* <p className='font-medium'>{obj.companyId.companyName}</p> */}
                                                                                            <p className='font-medium'>{modalData.name}</p>
                                                                                            <p className='text-xs text-gray-400'>{format(modalData.date)}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className='pt-4'>{modalData.description}</p>
                                                                                </div>
                                                                                <div className='relative w-full   bg-white '>
                                                                                    <img className='object w-[800px] h-[300px]' src={'http://localhost:5000/images/' + modalData.image} alt="" />
                                                                                </div>

                                                                                <div className='flex justify-between rounded-b-2xl items-center  bg-white  text-gray-400 border-t '>
                                                                                    <div className='w-20  flex justify-between items-center space-x-4 p-2'>
                                                                                        <div className='text-2xl flex text-slate-900 hover:cursor-pointer '   >
                                                                                            {/* {likes ? <FcLike /> : <AiOutlineHeart />} */}
                                                                                            <AiOutlineHeart />

                                                                                            {modalData.likes.length == '0' ? '' :
                                                                                                <span className='text-lg ml-2'>{modalData.likes.length}</span>
                                                                                            }
                                                                                        </div>
                                                                                        <div className='text-xl flex text-slate-900 cursor-pointer ' >
                                                                                            <div className='py-1'>
                                                                                                <FaRegComment />
                                                                                            </div>
                                                                                            {
                                                                                                modalData.comments.length == '0' ? '' :

                                                                                                    <span className='ml-2 text-lg'>{modalData.comments.length}</span>
                                                                                            }
                                                                                        </div>
                                                                                        <div className='text-xl'><FiSend /> </div>

                                                                                    </div>
                                                                                    <div className='text-xl p-2 '><BsBookmark /> </div>
                                                                                </div>



                                                                                <div className='flex flex-col '>
                                                                                    <div className=' max-h-32 overflow-auto scrollbar-hide rounded-b-2xl border-slate-200  shadow-md' >


                                                                                        {modalData.comments.map((obj, index) => {
                                                                                            return (
                                                                                                <div className="flex gap-3 py-2 pl-3 items-center bg-white">
                                                                                                    <div>
                                                                                                        <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full' width={30} height={30} alt="" />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <div>
                                                                                                            <span className="font-medium text-sm mr-2">{obj.name}</span>
                                                                                                            <span className="">{obj.comment}</span>
                                                                                                        </div>
                                                                                                        <p className="text-slate-500 text-xs ">{format(obj.created)}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        })}





                                                                                    </div>

                                                                                    {/* <div className=' flex rounded-b-2xl pl-5 p-1 pb-2  bg-white shadow-md text-gray-400 '>
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
                                                                                  
                                                                                </div> */}

                                                                                </div>


                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <button className="cursor-pointer absolute top-0 right-0 mt-8   mr-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={() => setShowSecondModal(false)} >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                                            <line x1="18" y1="6" x2="6" y2="18" />
                                                                            <line x1="6" y1="6" x2="18" y2="18" />
                                                                        </svg>
                                                                    </button>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                        </>

                                    ) : null}
                                </div>
                                <div>

                                </div>
                            </div>



                        </div>
                    </div >
                </div >


            </section >
        </div >
    )
}

export default ProfileCompany