import React, {useEffect}from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import DashboardHome from './Home';
import { Outlet, useLocation } from 'react-router-dom';

// useEffect(() => {
//   const loggedInUser = localStorage.getItem("user");
//   if (loggedInUser) {
//     const foundUser = JSON.parse(loggedInUser);
//     setUser(foundUser);
//   }
// }, []);

const Main = () => {
  const location = useLocation();
  return (
    <div className='bg-[#e8e8e8]'>
      {location.pathname.startsWith('/dashboard') && <Header/>}
      <div className='flex flex-wrap   mx-auto  z-10'>
        <div className='w-full sm:w-1/5 '>
        {location.pathname.startsWith('/dashboard') && <Sidebar/>}
        </div>
        <div className='w-full sm:w-4/5 p-4'>
        <main>
  <Outlet/>
</main>
        </div>
      </div>
      {location.pathname.startsWith('/dashboard') && <Footer/>}
    </div>
  );
};

export default Main;
