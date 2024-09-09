import React from 'react'
import { IoCartSharp } from "react-icons/io5";


const Differences = ({heading,info,btn1,btn2}) => {
  return (
    <div className='border-2 rounded-[14px] shadow-lg p-4 md:w-1/2 font-sans mb-3 md:mb-0'>
        <div className='w-full'>
            <span className='font-bold'>{heading}</span>
            <p className='text-sm mt-3 font-semibold'>{info}</p>
            <div className='flex items-center font-semibold mt-5 text-sm text-white'>
                <button className='shadow-lg bg-[#3CB3DF] pt-1 pb-1 p-2 rounded mr-3 text-[12px] flex items-center'>
                <IoCartSharp className='mr-2'/>
                {btn1}</button>
                {btn2 !== '' && <button className='bg-[#3CB3DF] pt-1 pb-1 rounded  shadow-lg text-[12px] flex items-center p-2'>
                  <IoCartSharp className='mr-2'/>
{btn2}</button>}
            </div>
        </div>
    </div>
  )
}

export default Differences