import React from 'react'
import Header from './Header/header'
import Footer from './Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Main = () => {
  const location = useLocation();
  return (
    <div>
{!location.pathname.startsWith("/dashboard") && <Header/>}
<main>
  <Outlet/>
</main>
{!location.pathname.startsWith("/dashboard") && <Footer/>}
    </div>
  )
}

export default Main;
