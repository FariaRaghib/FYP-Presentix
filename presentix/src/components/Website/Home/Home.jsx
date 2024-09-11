import React from 'react'
import Herosection from './Herosection'
import Pricings from '../Pricings/Pricings'
import Services from '../Services/Services'
import AboutUs from './Aboutus'


const Home = () => {
  return (
    <div>
    <Herosection/>
<Pricings/>
<Services/>
<AboutUs/>
    </div>
  )
}

export default Home