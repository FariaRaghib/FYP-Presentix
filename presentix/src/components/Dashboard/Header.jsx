import React from 'react'
import profile from './../../assets/Images/profile_icon.png'
const Header = () => {
  return (
    <div className='flex justify-between bg-white'>
<div className='flex-1 sm:w-1/12'>
<img src="/presentix_logo.png" className="mr-3 ml-2 mt-2 h-4 sm:h-16" alt="Presentix Logo" />
</div>
<div className='flex-2 sm:w-12/12'>
  <img className='w-16 h-16 m-3' src={profile}/>
</div>
    </div>
  )
}

export default Header
