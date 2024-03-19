import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)




  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)


  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)

    
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(message);
    setErrorMessage(message)

    
  }

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm)
  }

  return (
    <div>
    <Header />

    <div className='absolute'>
      <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='bg_img'
      />
    </div> 

    <form onSubmit={(e) => {e.preventDefault()}}
    className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>

    <h1 className='py-4 font-bold text-3xl'>
      {isSignInForm? "Sign In":"Sign Up"}
    </h1>

    {!isSignInForm && (
      <input
        ref={name}
        type='text'
        placeholder='Full Name'
        className='p-4 my-4 w-full rounded-lg bg-gray-700'
      />  
    )}

      <input 
        ref={email}
        type='text'
        placeholder='Email'
        className='p-4 my-4 w-full rounded-lg bg-gray-700'
      />

      <input 
        ref={password}
        type='Password'
        placeholder='Password'
        className='p-4 my-4 w-full rounded-lg bg-gray-700'
      />

      <p className='text-red-600 font-bold text-lg'>{errorMessage}</p>

      <button onClick={handleButtonClick}
      className='p-4 my-6 bg-red-700 rounded-lg'>
      {isSignInForm? "Sign In" : "Sign Up"}
      </button>

      <p className='cursor-pointer hover:text-blue-700' onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up now!" : "Old User? Sign In Now"}
      </p>
    </form>

    </div>
  )
}

export default Login
