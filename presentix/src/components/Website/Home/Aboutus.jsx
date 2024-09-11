  import React from 'react'
  import { about_main } from '../../../data/constant'
  import { styles } from '../../Styles/style'

  const AboutUs = () => {
    return (
      <div className='pt-12'>
  <div className='headings'>About Us</div>
  <div className='headingStyle'></div>
  <div className='spacer'></div>
  <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl z-10'>
      {about_main.map((about_main, index)=>(
  <div key={index} className='w-full sm:w-1/3  p-4'>
  <img style={styles.aboutIcon} src={about_main.icon} alt="Icon" />
  <h1 style={styles.aboutMainTitle}>{about_main.title}</h1>
  <p style={styles.aboutMainDescription}>{about_main.description}</p>
  </div>
      ))}
    </div>
  </div>

    )
  }

  export default AboutUs