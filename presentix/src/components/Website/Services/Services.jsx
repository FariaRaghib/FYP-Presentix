import React from 'react'
import { services } from '../../../data/constant'

const Services = () => {
  return (
    <div className='services-main'>
    <div className='pt-12 mt-12'></div>
<div className='headings' style={{color : 'white'}}>
Services
</div>
<div className='headingStyle' style={{color : 'white'}}></div>

{services.map((service, index) => (
    <div key={index} className={`flex flex-wrap justify-between items-center mx-auto max-w-screen-xl z-10 `}>
            {index !== 1 && (
                <>
        <div className='w-full sm:w-1/2 p-4'>
   
                    <h1 className='service-title text-white' >{service.title}</h1>
                    <p className='text-white'>{service.description}</p>
       
        </div>
        <div className='w-full sm:w-1/2 p-4'>
            <img src={service.img} alt="" />
        </div>
                 </>
                 )}
        {index === 1 && (
           <>
        <div className='w-full sm:w-1/2 p-4'>
                 <img src={service.img} alt="" />
        </div>
               
                        <div className='w-full sm:w-1/2 p-4'>
      
                    <h1 className='service-title text-white' >{service.title}</h1>
                    <p className='text-white'>{service.description}</p>
               
           
        </div> 
         </>
        )}
    </div>
))}


</div>
  )
}

export default Services