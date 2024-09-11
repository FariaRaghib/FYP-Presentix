import React from 'react'

function Overall_score() {
  return (
    <div className='shadow-md border border-blue-500 rounded-md m-2 text-center justify-center'>
    <div className=''>
        Overall Scores
    </div>
<div class="single-chart flex ">
    <svg viewBox="0 0 36 36" class="circular-chart orange flex justify-center">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="90, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">90%</text>
    </svg>
  </div>

    </div>
  )
}

export default Overall_score