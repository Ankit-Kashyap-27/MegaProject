import { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';


function App() {
  const [lodaing, setlodaing] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentuser()
      .then((usreData) => {
        if (usreData) {
          dispatch(login({ usreData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setlodaing(false))
  }, []);



  return !lodaing ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">


        <Header />
        <main>
           <Outlet />
        </main>
        <Footer />
      </div>

    </div>
  ) : null
}

export default App
