import React from 'react'
import { CustomizedMaps } from '../constants/content'

const GetCustomized = () => {
  return (
    <div className='text-white bg-sky-600 md:pl-52 pt-10  md:pr-36 pb-10'>
        <div className='flex items-start justify-between'>
            <div>
                <p className='uppercase text-xl mb-2'>custom mapping/gis services</p>
                <p className='uppercase font-bold'>get customized mapping solutions for:</p>
                <ul className='mt-5'>
                    {CustomizedMaps.map((item)=>(
                        <li key={item.id} className='maps-customized-list cursor-pointer hover:text-blue-700'>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p className='uppercase text-lg'>For further info please get in touch with :</p>
            </div>
        </div>
    </div>
  )
}

export default GetCustomized