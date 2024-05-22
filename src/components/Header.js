import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)



  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL } = user;
        // ...
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: USER_AVATAR}))
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    // unsubscribe will be call when component unmounts
    return ()=> unsubscribe()
   },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
       <img className='w-48' 
       src={LOGO}
       alt='logo'
       />
       {user && (
        <div className='flex p-2'>
        <img className='w-12 h-12' alt='usericon' src={USER_AVATAR} />
        <button className='font-bold text-white' onClick={handleSignout}>(Sign Out)</button>
       </div>
       )}
    </div>
  )
}

export default Header
