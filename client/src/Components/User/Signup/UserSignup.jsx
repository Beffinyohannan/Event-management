import React,{useState} from 'react' 
import landingImg from '../../../assets/user1.webp'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'



function UserSignup() {

  const initialValues = { username: '', email: '', phone: '', password: '' }
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


          axios.post('http://localhost:5000/signup', { ...formValues }).then((response) => {
            console.log(response);
              navigate('/login')
          })
      }

  }


  const validateForm = (data) => {
      const error = {};
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const userRegex = /^[A-Za-z0-9_-]{3,15}$/;
      if (!data.username) {
          error.username = "user name required"
      } else if (!userRegex.test(data.username)) {
          error.username = "Invalide user name"
      }
      if (!data.email) {
          error.email = "email required"
      } else if (!regex.test(data.email)) {
          error.email = "enter valide email address"
      }
      if (!data.phone) {
          error.phone = " phone number required"
      } else if (data.phone.length != 10) {
          error.phone = "number should be 10 digits"
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
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div className=' w-full text-center h-[550px] hidden md:block' style={{ backgroundImage: `url(${landingImg})` }}>
          {/* <img className='w-full h-full' src={landingImg} alt="" /> */}
          <h1 className='text-5xl m-5 pt-40  font-bold  text-slate-200'>Eventive</h1>
          <p className='text-slate-100 font-bold'>Find The Perfect Event...</p>
        </div>
        <div className='p-4  flex flex-col justify-around items-center w-96'>
          <form onSubmit={handleSubmit} className='w-3/4 mt-4 '>
            <h2 className='text-4xl font-bold text-center mb-8'>Signup</h2>
            <div >
              <input className='border p-2 mb-2 w-full'  placeholder='username' name='username' type="text" value={formValues.username} onChange={handleChange} />
              <p className='text-red-500'>{error.username}</p>
              <input className='border p-2 mb-2 w-full'  placeholder='Email' name='email' type="text" value={formValues.email} onChange={handleChange} />
              <p className='text-red-500'>{error.email}</p>
              <input className='border p-2 mb-2 w-full'  placeholder='Phone' name='phone' type="number" value={formValues.phone} onChange={handleChange} />
              <p className='text-red-500'>{error.phone}</p>
              <input className='border p-2 mb-2 w-full'  placeholder='Password' name='password' type="Password" value={formValues.password} onChange={handleChange} />
              <p className='text-red-500'>{error.password}</p>
            </div>
            <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Signup</button>
            
          </form>
          
          <p className='text-center'>Already have account : <Link to={'/login'}>Login </Link></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserSignup