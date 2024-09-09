import React from 'react'
import { DifferentRajasthanMaps } from '../constants/content'
const DifferentMaps = () => {
  return (
    <div className='w-full flex items-center m-10 ml-0 mr-0 different-maps font-sans'>
        <div className='md:grid md:grid-cols-4 flex items-center gap-5 w-full'>
            {DifferentRajasthanMaps.map((item)=>(
                <div key={item.id} className='flex-col items-center w-[10rem]'>
                    <div className='flex items-center w-36 md:w-full'>
                        <img src={item.href} alt="" className='mb-3'/>
                    </div>
                    <div className='flex items-center '>
                        <div className='bg-[#FF0000] w-[2px] h-[20px] mr-1'></div>
                        <p className='text-[12px] font-semibold pl-1 '>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DifferentMaps