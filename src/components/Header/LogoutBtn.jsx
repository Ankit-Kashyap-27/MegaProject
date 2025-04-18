import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


const LogoutBtn = () => {

    const dispatch = useDispatch()   
    const logoutHandler =() =>{
      authService.logout().then(()=>{
        dispatch(logout())
      })
    }
  return (
   <button className='inline-block px-6 py-2 rounded-full duration-200
    hover:bg-blue-100 '>LogOut</button>
  )
}

export default LogoutBtn
