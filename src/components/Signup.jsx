import React from 'react'
import { useState } from 'react'
import authService from '../appwrite/auth'
import { data, Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, seterror] = useState('')
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        seterror('')
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentuser()
                if (userData) dispatch(login(userData))
                navigate('/')

            }

        } catch (error) {
            seterror(error.message)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen '>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create an acount</h2>

                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account?&nbsp; <Link to='/login' className='text-blue-500 hover:underline'>Sign in</Link>
                </p>
                {error && <p className='text-red-500 text-center'>{error}</p>}
                <form handleSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <input
                            lable='Full Name'
                            placeholder='Enter your full name'
                            {...register('name', { required: true, })}
                        />

                        <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}
                            ref={ref}
                            id={id}
                            {...props}
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || 'Email is not valid'
                                }

                            })}

                        />
                        <input 
                        lable='Password'
                        type='password'
                        placeholder='Enter your password'
                        {...register('password', { required: true   })}
                         />

                         <button 
                         type='submit'
                         className='w-full'
                         >Create acount</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Signup
