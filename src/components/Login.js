import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BG_IMG, USER_AVATAR } from '../utils/constants'

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)


  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)

    // console.log(email.current.value)
    // console.log(password.current.value)
    // console.log(message)

    setErrorMessage(message)

    if(message) return

    if(!isSignInForm){
       // Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
          const user = userCredential.user;
         // console.log(user)
          //Update user profile
          updateProfile(user, {
            displayName: name.current.value, photoURL: {USER_AVATAR}
          }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL } = auth.currentUser;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USER_AVATAR
          })
        )
          }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
          })
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
       // console.log(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      })
    }   
  }

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm)
  }

  return (
    <div>
    <Header />

    <div className='absolute'>
      <img 
      src={BG_IMG} alt='bg_img'
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
