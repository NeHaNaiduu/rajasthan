import React from 'react'
import { MdArrowRight } from "react-icons/md";


const MainMap = () => {
  return (
    <div className='w-full flex items-center justify-center mt-5'>
        <div>
            <div className='text-white bg-red-500 rounded-t-md pl-2 pr-2 p-1 font-semibold flex justify-between items-center'>
              <span>Map of Rajasthan</span>
              <div className='flex items-center'>
                <span>Customized Maps</span>
                <MdArrowRight />
              </div>
            </div>
            <img src="rajasthan-map.jpg" alt="" />
            <p className='text-xs mt-2'><span className='font-semibold'>Disclaimer : </span>All efforts have been made to make this image accurate. However, Mapping Digiworld Pvt Ltd and its directors do not own any responsibility for the correctness or authenticity of the same.</p>
            <button className=' text-white bg-red-500 pt-1 pb-1 p-3 rounded mr-3 mt-2'>Buy Custom Map</button>
        </div>
    </div>
  )
}

export default MainMap