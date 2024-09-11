import React from 'react'
import { styles } from '../../Styles/style'
import { pricing } from '../../../data/constant'

const Pricings = () => {
  return (
    <div>
      <div className='spacer'></div>
    <div className='headings'>
    Pricings
    </div>
    <div className='headingStyle'></div>
      <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl z-10'>
          {pricing.map((pricing, index) => (
            <div key={index} className='w-full sm:w-1/3  p-4'>
              <div className='pricing'>
              <h1 className='pricing-title'>{pricing.title}</h1>
              <p className='pricing-price'>{pricing.price}</p>
              <ul className='text-center'>
                {pricing.Features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <button style={styles.btnStyle} className='btn'>
                  Buy Now
               </button>
              </div>

              
              </div>
              </div>
          ))}
        </div>
    
    </div>
  )
}


export default Pricings;