import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import Swal from 'sweetalert2'

function Posts() {

  const [state, setState] = useState([])
  const [block, setBlock] = useState(false)
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER
  // console.log(PF,"pfff");


  useEffect(() => {
    axios.get("http://localhost:5000/admin/posts").then((response) => {
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

  const blockUser = (id) => {
    confirmAlert({
      title: 'Confirm your submit',
      message: 'Are you sure to Block the Post.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.post("http://localhost:5000/admin/block-post/" + id).then((response) => {
              console.log(response, 'reject');
              if (response.status == 200) {
                console.log(response.data, 'rejjjjjjjjjjjjjj');
                setBlock(!block)
                // alert('Form Rejected Sucessfully')
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Post Blocked Sucessfully',
                  showConfirmButton: false,
                  timer: 1500
                })
              } else {
                console.log('rejected not completed ');
                // alert('Something Went Wrong')
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Something Went Wrong',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            }).catch((error) => {
              console.log(error.message, 'rrrrrrrrrrrr');
              // alert(error.message)
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
              })
            })
          }
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        }
      ]
    });
  }

  const unblockUser = (id) => {
    confirmAlert({
      title: 'Confirm your submit',
      message: 'Are you sure to Unblock the Post.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.post("http://localhost:5000/admin/unblock-post/" + id).then((response) => {
              console.log(response, 'reject');
              if (response.status == 200) {
                console.log(response.data, 'rejjjjjjjjjjjjjj');
                setBlock(!block)
                // alert('Form Rejected Sucessfully')
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Post Unblocked Sucessfully',
                  showConfirmButton: false,
                  timer: 1500
                })
              } else {
                console.log('rejected not completed ');
                // alert('Something Went Wrong')
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Something Went Wrong',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            }).catch((error) => {
              console.log(error.message, 'rrrrrrrrrrrr');
              // alert(error.message)
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
              })
            })
          }
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        }
      ]
    });
  }

  return (
    <div className='w-4/5'>
      {/* <div className='m-6 pb-2 pr-7'>
 <button className='border w-50 px-4 py-1 rounded-full float-right  bg-slate-700  hover:bg-slate-600  text-white' >Logout</button>

  </div> */}
      <div class="bg-white p-8 rounded-md  ">

        <div class=" flex items-center justify-between pb-6 ">

          <div>
            <h2 class="text-gray-600 font-semibold">USERS LIST</h2>
            {/* <span class="text-xs">Pending Companies</span> */}
          </div>

          <div class="flex items-center justify-between">
            {/* <div class="flex bg-gray-50 items-center p-2 rounded-md">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
             fill="currentColor">
             <path fill-rule="evenodd"
                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                 clip-rule="evenodd" />
         </svg>
         <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
     </div> */}
            {/* <div class="lg:ml-40 ml-10 space-x-8">
         <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button>
         <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
     </div> */}
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-7 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Post ID
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Company Name
                    </th>
                   
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Description
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th
                      class="px-16 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {
                    state.map((obj, index) => {

                      return (

                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                            {/* <div className='mr-4'>{index}</div> */}
                              
                              <div class="flex-shrink-0 w-10 h-10">
                                 <img class="w-full h-full rounded-full"
                                     src={'http://localhost:5000/images/'+obj.image}
                                     alt="" />
                             </div>
                              <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {obj._id}


                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {obj.companyName}

                            </p>
                          </td>
                        
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {obj.description}

                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {obj.date}

                            </p>
                          </td>
                          

                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {obj.status == true ? <span
                              class="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                              <span aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                              <span class="relative">
                                Active

                              </span>
                            </span>
                              : <span
                                class="relative inline-block px-1  py-1 font-semibold text-slate-900 leading-tight">
                                <span aria-hidden
                                  class="absolute inset-0 bg-slate-400 opacity-50 rounded-full"></span>
                                <span class="relative">
                                  Blocked

                                </span>
                              </span>
                            }
                          </td>
                          <td className='flex m-5'>
                            {obj.status == true ?

                              <button className='border w-full  my-1 py-2  rounded-full bg-indigo-600  hover:bg-indigo-500 relative text-white' onClick={(e) => { blockUser(obj._id) }}>block</button> :

                              <button className='border w-full my-1  py-2 rounded-full bg-slate-800  hover:bg-slate-600 relative text-white' onClick={(e) => { unblockUser(obj._id) }}  >unblock</button>
                            }
                          </td>

                        </tr>
                      )
                    })
                  }




                </tbody>
              </table>


              {/* <div
             class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
             <span class="text-xs xs:text-sm text-gray-900">
                 Showing 1 to 10 of 50 Entries
             </span>
             <div class="inline-flex mt-2 xs:mt-0">
                 <button
                     class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                     Prev
                 </button>
                 &nbsp; &nbsp;
                 <button
                     class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                     Next
                 </button>
             </div>
         </div> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Posts