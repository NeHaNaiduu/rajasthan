import React from 'react'
import { DifferentRajasthanMaps } from '../constants/content'
const DifferentMaps = () => {
  return (
    <div className='w-full flex items-center m-10 ml-0 mr-0 different-maps'>
        <div className='flex items-center w-full'>
            {DifferentRajasthanMaps.map((item)=>(
                <div key={item.id} className='flex-col items-center w-48'>
                    <div className='flex items-center justify-center w-36 md:w-full'>
                        <img src={item.href} alt="" className='mb-3'/>
                    </div>
                    <p className='text-center text-xs font-semibold'>{item.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DifferentMaps