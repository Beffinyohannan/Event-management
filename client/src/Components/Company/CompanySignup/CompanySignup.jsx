import React,{useState} from 'react'
import landingImg from '../../../assets/company.webp'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


function CompanySignup() {

    const initialValues = { companyName: '', email: '',companyType:'',registerNo:'', phone: '',companyAddress:'', password: '' }
    const [formValues, SetFormValues] = useState(initialValues)
    const navigate = useNavigate()
    const [error, setError] = useState({});

    const signupData = {
      ...formValues
  }

  const handleChange = (e) => {
      console.log(e.target);
      const { name, value } = e.target
      SetFormValues({ ...formValues, [name]: value })
      console.log(formValues);
  }

  const handleSubmit = (e) => {
      e.preventDefault()

      const errors = validateForm(signupData)
      setError(errors)
      
      console.log(Object.keys(errors).length, 'llkklk');
      if (Object.keys(errors).length == 0) {
          console.log("hello");


          axios.post('http://localhost:5000/company/signup', { ...formValues }).then((response) => {
            console.log(response);
            if(response.data.insert==true){

                navigate('/company/login')
            }
          })
      }

  }


  const validateForm = (data) => {
      const error = {};
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const userRegex = /^[A-Za-z0-9_-]{3,15}$/;
      if (!data.companyName) {
          error.companyName = "company name required"
      }
    //    else if (!userRegex.test(data.companyName)) {
    //       error.companyName = "Invalide user name"
    //   }
      if (!data.companyType) {
        error.companyType = "company type required"
    } 
      if (!data.email) {
          error.email = "email required"
      } else if (!regex.test(data.email)) {
          error.email = "enter valide email address"
      }
      if (!data.registerNo) {
        error.registerNo = "register no. required"
    } 
      if (!data.phone) {
          error.phone = " phone number required"
      } else if (data.phone.length != 10) {
          error.phone = "number should be 10 digits"
      }
      if (!data.companyAddress) {
        error.companyAddress = "company address required"
    } 
      if (!data.password) {
          error.password = "password required"
      } else if (data.password.length != 6) {
          error.password = "password should be 6 digit"
      }

      return error;
  }

  return (
    <div>
    <div className='w-full h-screen flex'>
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[650px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
      <div className=' w-full text-center  h-[650px] hidden md:block' style={{ backgroundImage: `url(${landingImg})` }}>
        {/* <img className='w-full h-full' src={landingImg} alt="" /> */}
        <h1 className='text-5xl m-5 pt-52   font-bold  text-slate-200'>Eventive</h1>
          <p className='text-slate-100 font-bold'>Have a opertunity to being ourself.</p>
      </div>
      <div className='p-4   flex flex-col justify-around items-center'>
        <form className='w-3/4 mt-4 ' onSubmit={handleSubmit}>
          <h2 className='text-4xl font-bold text-center mb-8'>Signup</h2>
          <div >
           <div className='flex gap-2'>

            <div >
           <input className='border p-2 mb-2 mr-2 w-full'  placeholder='Company Name'name='companyName' type="text" value={formValues.companyName} onChange={handleChange}  />
           <p className='text-red-500'>{error.companyName}</p>
            </div>

            <div >
            <input className='border p-2 mb-2 w-full'  placeholder='Company Type' name='companyType' type="text" value={formValues.companyType} onChange={handleChange}  />
            <p className='text-red-500'>{error.companyType}</p>
            </div>
           </div>

            <div className='flex gap-2'>

                <div>
            <input className='border p-2 mb-2 mr-2 w-full'  placeholder='Email' name='email' type="text" value={formValues.email} onChange={handleChange} />
            <p className='text-red-500'>{error.email}</p>
                </div>

                <div>
            <input className='border p-2 mb-2 w-full'  placeholder='Register No.' name='registerNo' type="text" value={formValues.registerNo} onChange={handleChange} />
            <p className='text-red-500'>{error.registerNo}</p>
                </div>
            </div>

            <input className='border p-2 mb-2 w-full'  placeholder='Phone' name='phone' type="number" value={formValues.phone} onChange={handleChange}  />
            <p className='text-red-500'>{error.phone}</p>
            <input className='border p-2 mb-2 w-full'  placeholder='Company Address' name='companyAddress' type="text" value={formValues.companyAddress} onChange={handleChange} />
            <p className='text-red-500'>{error.companyAddress}</p>
            <input className='border p-2 mb-2 w-full'  placeholder='Password' name='password' type="Password" value={formValues.password} onChange={handleChange} />
            <p className='text-red-500'>{error.password}</p>
          </div>
          <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Signup</button>
          
        </form>
        <p className='text-center'>Already have account : <Link to={'/company/login'}>Login </Link></p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default CompanySignup