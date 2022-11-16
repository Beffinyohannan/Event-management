import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CompanyList() {
    const [state, setState] = useState([])
    const [block, setBlock] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:5000/view-companies").then((response) => {
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
        <div className='ml-20 mt-28 mb-4   '>
            {
                state.map((obj, index) => {

                    return (
                        <div className=' flex p-1 px-4 mb-3 bg-white   rounded-2xl border-slate-200 border-t shadow-md'>
                            <div className='m-2'>
                                <img src="https://imgs.search.brave.com/JC3yuRG8o8d2G-kk-gDv7DrSKVLLPa5QoIK2uoMr9QE/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/enVZTVhkQjNEUFVu/UE9ld2hha0N3SGFG/ZSZwaWQ9QXBp" className='rounded-full' width={70} height={50} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1 className='text-xl font-medium pb-1 cursor-pointer'>{obj.companyName}</h1>
                                <p>description about the companies are  provides here</p>
                            </div>
                            <div className='m-2'>
                                <button className='ml-6 mt-3 bg-slate-900 text-white px-5 py-0.5 rounded-xl'>Follow</button>
                            </div>
                        </div>
                )}
                   ) }
    </div>
    )
}

export default CompanyList