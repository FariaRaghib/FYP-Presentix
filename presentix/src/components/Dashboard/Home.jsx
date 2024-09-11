import React from 'react'
import Sidebar from './Sidebar'
import { Route, Router, BrowserRouter } from "react-router-dom";
import Upload_video from './Upload_vedio/Upload_video';
import Account from './Account/Account';
import Results from './Results/Results';
import dashboard_main from './../../assets/Images/dashboard_Main_1.jpg'
const DashboardHome = () => {
  return (
    <div className='bg-white p-4 '>
        <div className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl'>Welcome to the Dashboard</h1>
            <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Let's Start!</button>
        </div>
        <div className='flex justify-center p-20'>
            <img src={dashboard_main} alt="Dashboard Image" className='max-w-full h-96' />
        </div>
    </div>
);
}

export default DashboardHome;
