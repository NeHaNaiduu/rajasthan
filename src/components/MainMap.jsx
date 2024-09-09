import React from 'react'
import { MdArrowRight } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const MainMap = () => {
  return (
    <div className='w-full flex items-center justify-center mt-5 font-sans'>
        <div>
            <div className='text-white bg-[#FF0000] rounded-t-2xl pl-2 pr-2 p-1 font-semibold flex font-sans justify-between items-center text-[14px]'>
              <h2>Map of Rajasthan</h2>
              <div className='flex items-center'>
                <span className='flex items-center'><IoCartSharp className='mr-1 text-xl'/>Buy this map</span>
                <MdArrowRight />
              </div>
            </div>
            <img src="rajasthan-map.jpg" alt="" />
            <p className='text-[14px] mt-4 font-sans'><span className='font-semibold'>Disclaimer : </span>All efforts have been made to make this image accurate. However, Mapping Digiworld Pvt Ltd and its directors do not own any responsibility for the correctness or authenticity of the same.</p>
            <div className='flex items-center justify-between'>
              <button className=' text-white bg-[#3CB3DF] pt-1 pb-1 p-3 rounded mr-3 mt-4 shadow-lg text-[14px] flex items-center mb-2'>
              <IoCartSharp className='mr-2'/>Buy Custom Map</button>
              <div className='flex items-center justify-between w-1/4'>
                <FaFacebook className='text-blue-500 cursor-pointer'/>
                <FaXTwitter className='text-neutral-800 cursor-pointer'/>
                <FaInstagram className='text-pink-700 cursor-pointer'/>
                <FaYoutube className='text-red-600 cursor-pointer'/>
                <FaLinkedin className='text-blue-600 cursor-pointer'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MainMap