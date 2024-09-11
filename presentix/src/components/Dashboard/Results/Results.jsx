import React from 'react'
import Bvf_score from './Bvf_score'
import Overall_score from './Overall_score'
import Detailed_score from './Detailed_score'
import TopRepeatedWords from './TopRepeatedWords'
import UniqueWordSpoken from './UniqueWordSpoken'
import FillerWordSpoken from './FillerWordSpoken'
const Results = () => {
  return (
    <div>
      <h1 className='text-3xl'>RESULTS</h1>
      <div className='flex mt-4'>
      <div className='w-1/6'><Overall_score/></div>
      <div className='w-2/6'><Bvf_score/></div>
      <div className='w-3/6'><Detailed_score/></div>
    </div>
    <div className='w-6/6 text-xl text-center border border-black rounded-lg bg-blue-950 text-white p-1 ml-1 mr-1'>Speech Analysis Result</div>
    <div className='flex mt-4'>
      <div className='w-2/6'><TopRepeatedWords/></div>
      <div className='w-2/6'><UniqueWordSpoken/></div>
      <div className='w-2/6'><FillerWordSpoken/></div>
    </div>
    </div>
  )
}

export default Results
