import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService, { AuthService } from '../appwrite/auth'
import { useForm } from 'react-hook-form'
const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, seterror] = useState('');

    const login = async (data) => {
        seterror('')
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentuser()
                if (userData) dispatch(authLogin(userData))
                navigate('/')
            }

        } catch (error) {
            seterror(error.message)
        }
    }

    return (

        <div className='flex w-full items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 `}>
                <div className="mb-2 flex justify-center ">
                    <span className='inline-block w-full max-w-[100px] '>
                        <Logo width='100%' />
                    </span>
                </div>
<h2 className='text-center text-2xl font-bold lendig-tight'>sign in to your acount</h2>
<p className='mt-2 text-center text-base text-black/60'>
Don&apos;t have any acount?&nbsp;  <Link to='/signup' className='text-blue-500 hover:underline'>Sign up</Link>
</p>

{error && <p className='text-red-500 text-center'>{error}</p>}
<form onSubmit={handleSubmit(login)}>

    <div className="space-y-5"> 
        <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}
        ref={ref}
        id={id}
        {...props}
        {...register('email', { required: true ,
            validate:{
                matchPatern:(value)=> /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || 'Email is not valid'
            }

        })}

        />
<input type="password" lable='Password' placeholder='Enter your password'
{...register('password', { required: true })}
  />

  <button
  type='submit'
  className='w-full'
  >Sign in</button>
    </div>
</form>
            </div>

        </div>
    )
}

export default Login
