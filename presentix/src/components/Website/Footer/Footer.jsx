import React from 'react'
import { footer_menu_1 } from '../../../data/constant';
import { BsCaretRightFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>


<footer class="services-main text-white mt-36">
<div className='flex flex-wrap mx-auto max-w-screen-xl z-10'>
<div className='w-full sm:w-1/3 p-4 pt-10'>
<img src="presentix_logo_white.png" alt="Logo" className='pb-6 m-auto' width={'300px'}/>
<p>
    
Presentix is a forward-thinking technology company dedicated to revolutionizing presentation experiences. Leveraging state-of-the-art AI testing, we enhance the quality and impact of presentations, providing comprehensive analysis and valuable insights for individuals and organizations.
</p>
</div>

    
    <div className='w-full sm:w-1/3 p-10 pt-10'>

    {footer_menu_1.map((footer_menu_1,index) => (
<div key={index} >
    <h1 className='footer_title'>{footer_menu_1.title}</h1>
    {footer_menu_1.menu_items.map((menu_items,index) => (
        <div key={index}>
<a href={menu_items.link} className='flex p-1 text-md'>
  <BsCaretRightFill style={{ marginRight: '5px', marginTop: '4px'  }} />
  {menu_items.menu_item}
</a>
        </div>
    ))}
          </div>   
))}
   </div>
   <div className='w-full sm:w-1/3 p-10 pt-10'>
    <h1 className='footer_title'>Newsletter Subscription</h1>
    <form action="">
        <input type="mail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 mb-3" placeholder='abc@mail.com' required/>
    </form>
    <button className='btn'>
        Subscribe
    </button>
   </div>
   <div class=" w-full border-b border-white"></div>
<div className='w-full pt-8 pb-8 text-center'> 
<p>© Copyright 2023   |   Presentix  |   All Rights Reserved  </p>
</div>

</div>
</footer>


    </div>
  )
}

export default Footer