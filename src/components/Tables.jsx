import React from 'react'
import { Rajasthantable } from '../constants/content'
import { Rajasthanmaptable,Rajasthantraveltable, Rajasthanvisittable } from '../constants/content';
import { Rajasthanhotelstable } from '../constants/content';
import { IoMdArrowDropright } from "react-icons/io";


const Tables = () => {
  return (
    <div className='font-sans flex items-center justify-center w-full'>
        <div className=' w-full flex-col items-center'>
            <div className='mb-10 '>
            <div className=' w-full border-l-4 pl-4 border-[#FF0000] font-bold text-[16px]'>Rajasthan</div>
                <div className=' w-full mt-5 rounded-lg shadow-custom flex items-center justify-center'>
                    <ul className='grid grid-cols-3 text-[14px] py-4 w-full lg:pl-20 md:pl-10'>
                        {Rajasthantable.map((item)=>(
                            <li key={item.id} className='cursor-pointer hover:text-[#007BB9] pb-2 flex items-center font-semibold font-sans
                                '>
                                    <IoMdArrowDropright className='text-[#007BB9] mr-2 text-2xl' />
                                    {item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mb-10 border-neutral-600'>
            <div className=' w-full border-l-4 pl-4 border-[#FF0000] font-bold text-[16px]'>Rajasthan Map</div>
                <div className=' w-full mt-5 rounded-lg shadow-custom flex items-center justify-center'>
                    <ul className='grid grid-cols-3 text-[14px] py-4 w-full md:pl-20'>
                        {Rajasthanmaptable.map((item)=>(
                            <li key={item.id} className='cursor-pointer hover:text-[#007BB9] pb-2 flex items-center font-semibold font-sans
                                '>
                                    <IoMdArrowDropright className='text-[#007BB9] mr-2 text-2xl' />
                                    {item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mb-10 border-neutral-600'>
            <div className=' w-full border-l-4 pl-4 border-[#FF0000] font-bold text-[16px]'>Hotels in Rajasthan</div>
                <div className=' w-full mt-5 rounded-lg shadow-custom flex items-center justify-center'>
                    <ul className='grid grid-cols-3 text-[14px] py-4 w-full md:pl-20'>
                        {Rajasthanhotelstable.map((item)=>(
                            <li key={item.id} className='pb-2 flex items-center cursor-pointer hover:text-[#007BB9] font-semibold font-sans
                                '>
                                    <IoMdArrowDropright className='text-[#007BB9] mr-2 text-2xl' />
                                    {item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mb-10 border-neutral-600'>
            <div className=' w-full border-l-4 pl-4 border-[#FF0000] font-bold text-[16px]'>Travel to Rajasthan</div>
                <div className=' w-full mt-5 rounded-lg shadow-custom flex items-center justify-center'>
                    <ul className='grid grid-cols-3 text-[14px] py-4 w-full md:pl-20'>
                        {Rajasthantraveltable.map((item)=>(
                            <li key={item.id} className='pb-2 flex items-center cursor-pointer hover:text-[#007BB9] font-semibold font-sans
                                '>
                                    <IoMdArrowDropright className='text-[#007BB9] mr-2 text-2xl' />
                                    {item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mb-10 border-neutral-600'>
            <div className=' w-full border-l-4 pl-4 border-[#FF0000] font-bold text-[16px]'>Places to visit in Rajasthan</div>
                <div className=' w-full mt-5 rounded-lg shadow-custom flex items-center justify-center'>
                    <ul className='grid grid-cols-3 text-[14px] py-4 w-full md:pl-20'>
                        {Rajasthanvisittable.map((item)=>(
                            <li key={item.id} className='pb-2 flex items-center cursor-pointer hover:text-[#007BB9] font-semibold font-sans
                                '>
                                    <IoMdArrowDropright className='text-[#007BB9] mr-2 text-2xl' />
                                    {item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tables