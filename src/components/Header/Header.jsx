import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'


const Header = () => {

  const authStatus = useSelector((state) => state.auth.Status)
  const navigate = useNavigate()
  const navItems = [
    {

      name: 'Home',
      slug: '/',
      active: true

    },
    {

      name: 'Login',
      slug: '/Login',
      active: !authSlice

    },
    {

      name: 'Signup',
      slug: '/signup',
      active: !authSlice

    },
    {

      name: 'Add Post',
      slug: '/add-post',
      active: authSlice

    },
    {

      name: 'All Post',
      slug: '/all-post',
      active: authSlice

    },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flexs'>
          <div className="mr-4  ">
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto '>{navItems.map((item) => item.active ? (
            <li key={item.name}>
              <button onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2
       duration-200 hover:bg-blue-100 rounded-full'
              >{item.name}</button></li>
          ) : null)}
          {authStatus && ( 
            <li>
              <LogoutBtn/>
            </li>
          )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
