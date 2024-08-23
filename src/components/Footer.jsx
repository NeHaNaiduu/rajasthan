import React from 'react'
import {FooterAboutItems,FooterPolicyItems,FooterPartnerItems,FooterSupportItems} from '../constants/content'
import { SocialIcons } from '../constants/content'

const Footer = () => {
  return (
    <div className='text-white bg-black flex items-center justify-center w-full pt-10 pb-10 p-2 md:pl-52 md:pr-36'>
        <div className='w-full flex-col items-center'>
            <div className='md:flex grid grid-cols-2 items-start gap-7 justify-between w-full text-sm md:text-lg md:text-sm'>
                <div className='flex-col items-center justify-center'>
                  <div className='w-20'>
                    <img src="maps-logo.png" alt="" />
                  </div>
                  <div>
                    <span className='uppercase font-semibold'>mapping digiworld pvt ltd</span>
                    <p className='text-xs'>solutions@mapsofindia.com</p>
                  </div>
                </div>
                <div>
                  <span className='uppercase font-bold '>who are we?</span>
                  <ul className='mt-7'>
                    {FooterAboutItems.map((item)=>(
                      <li key={item.id} className='cursor-pointer hover:text-neutral-400'>{item.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className='uppercase font-bold'>partner with us</span>
                  <ul className='mt-7'>
                    {FooterPartnerItems.map((item)=>(
                      <li key={item.id} className='cursor-pointer hover:text-neutral-400'>{item.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className='uppercase font-bold'>legal policy</span>
                  <ul className='mt-7'>
                    {FooterPolicyItems.map((item)=>(
                      <li key={item.id} className='cursor-pointer hover:text-neutral-400'>{item.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className='uppercase font-bold'>support center</span>
                  <ul className='mt-7'>
                    {FooterSupportItems.map((item)=>(
                      <li key={item.id} className='cursor-pointer hover:text-neutral-400'>{item.name}</li>
                    ))}
                  </ul>
                </div>
            </div>
            <div className=' flex items-center justify-center w-full mt-5'>
              <div className='md:w-1/4 gap-4 flex items-center justify-between'>
                {SocialIcons.map((icon)=>(
                  <div key={icon.id} className='text-gray-600 rounded-full border-2 p-3 bg-neutral-400 cursor-pointer duration-200 hover:scale-125 hover:bg-white hover:text-neutral-700'>{icon.name}</div>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer