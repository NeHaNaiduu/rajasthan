import React from 'react'
import { CustomizedMaps } from '../constants/content'

const GetCustomized = () => {
  return (
    <div className='text-white bg-[#638dad] lg:pl-52
    md:pl-10 md:pr-10 
    pt-10  lg:pr-36 pb-14 font-sans pl-03 flex-col items-center justify-center w-full'>
        <div className='w-full flex items-center justify-center'>
            <div className='text-center uppercase text-xl mb-10 flex-col items-center font-bold tracking-wider get-customized-heading'>
                custom mapping / gis services
                <div className='bg-white h-1 w-[100px] left-[50%] translate-x-[125%] mt-3'></div>
            </div>
        </div>
        <div className='md:flex items-start justify-between'>
            <div>
                <p className='uppercase font-bold'>get customized mapping solutions for:</p>
                <ul className='mt-5'>
                    {CustomizedMaps.map((item)=>(
                        <li key={item.id} className='maps-customized-list cursor-pointer hover:text-blue-700'>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className='mt-5 md:m-0'>
                <p className='uppercase font-bold'>For further info please get in touch with :</p>
                <div className='mt-6'>
                    <img src="apoorv.jpg" alt="" />
                </div>
                <div>
                    <p className='uppercase font-semibold mt-2'>Apporv</p>
                    <p className='uppercase mb-4'>mapping consultant</p>
                    <p>+91-8929683196</p>
                    <p>apporv@mappingdigiworld.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetCustomized