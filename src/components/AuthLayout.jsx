import React ,{useState,useEffect,}from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default Protected = ({children,authentication= true}) => {

const navigate = useNavigate()
const [loder, setloder] = useState(true);
const authStatus = useSelector(state => state.auth.Status)

useEffect(() => {
  if(authentication && authStatus !== authentication){
    navigate('/login')
  }
  else if(!authentication && authStatus !== authentication){
    navigate('/')
  }
  setloder(false)
}, [authStatus,navigate,authentication]);


  return loder ? <h1>Loding....</h1>:<>{children}</>
}


