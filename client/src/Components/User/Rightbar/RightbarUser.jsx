import React, { useState, useEffect } from 'react'
import axios from '../../../api/axios'
function RightbarUser(props) {

    const [state, setState] = useState([])
    const [block, setBlock] = useState(false)


    useEffect(() => {
        axios.get("/view-companies").then((response) => {
            // console.log(response.data);
            const { data } = response
            if (response.data) {
                setState(data)
                // console.log(state, 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');

            }
        }).catch((error) => {
            console.log(error.message);
        })
    }, [block])

    return (
        <div className='bg-slate-100 w-80 pt-20 px-5 h-full hidden xl:block fixed right-0 top-0'>
            <h1 className='mb-3'>Sugesstions</h1>
            {
                state.map((obj, index) => {

                    return (
                        <div className=' flex  py-2 px-4 mb-3 h-16 bg-white   rounded-2xl border-slate-200 border-t shadow-md'>
                            <div className='m-1 ml-3 '>
                                <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full' width={32} alt="" />
                            </div>
                            <div className='ml-3'>
                                <h1 className='text-md font-medium pb-1 cursor-pointer'>{obj.companyName}</h1>
                                {/* <p>description about the companies are  provides here</p> */}
                            </div>
                            <div className='mt-1'>
                                <button className='ml-4  bg-slate-900 text-white px-4 py-0.5 rounded-xl'>Follow</button>
                            </div>
                        </div>
                    )
                }
                )}
        </div>
    )
}

RightbarUser.propTypes = {}

export default RightbarUser
