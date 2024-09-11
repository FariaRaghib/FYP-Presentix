import React from 'react';
import { Progress, Typography } from '@material-tailwind/react';

function Detailed_Score() {
  return (
    <div className='shadow-md border border-blue-500 rounded-md m-2 text-center justify-center'>
      <div>Detailed_score</div>
      <div>
        <div className='w-11/12 m-auto mb-3'>
        <h1 className='text-left'>Audience Interaction </h1>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
        </div>

        <div className='w-11/12 m-auto mb-3'>
           <h1 className='text-left'>Resting Posture</h1>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
        </div>

        <div className='w-11/12 m-auto mb-3'>
        <h1 className='text-left'>Feet Movement</h1>
        <div className="w-full m-auto bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
        </div>

        <div className='w-11/12 m-auto mb-3'>
        <h1 className='text-left'>Hands Used</h1>
        <div className="w-full m-auto bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
        </div>

        <div className='w-11/12 m-auto mb-3'>
        <h1 className='text-left'>Body Language</h1>
        <div className="w-full m-auto bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
        </div>

        <div className='w-11/12 m-auto mb-3'>
        <h1 className='text-left'>Smile Count</h1>
        <div className="w-full m-auto bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
        </div>

        <div className='w-11/12 m-auto mb-3'>
        <h1 className='text-left'>Rate Of Speech</h1>
        <div className="w-full m-auto bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Detailed_Score;
