import React from 'react'
import {FooterAboutItems,FooterPolicyItems,FooterPartnerItems,FooterSupportItems} from '../constants/content'
import { SocialIcons } from '../constants/content'

const Footer = () => {
  return (
    <div className='text-white bg-[rgb(51,51,51)] flex items-center justify-center w-full pt-10 pb-10 p-2 lg:pl-52 md:pl-10 md:pr-10 lg:pr-36 font-sans'>
        <div className='w-full flex-col items-center'>
            <div className='md:flex grid grid-cols-2 items-start gap-7 justify-between w-full text-sm md:text-lg md:text-sm'>
                <div className='flex-col items-center justify-center'>
                  <div className='w-20'>
                    <img src="compare-infobase-logo.png" alt="" />
                  </div>
                  <div>
                    <span className='uppercase font-semibold'>mapping digiworld pvt ltd</span>
                    <p className='text-xs'>solutions@mapsofindia.com</p>
                  </div>
                </div>
                <div>
                  <span className='uppercase font-bold footer-list-heading'>who are we?</span>
                  <ul className='mt-7'>
                    {FooterAboutItems.map((item)=>(
                      <li key={item.id} className='mb-[7px] cursor-pointer hover:text-neutral-400'>{item.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className='uppercase font-bold footer-list-heading'>partner with us</span>
                  {/* <ul className='mt-7'>
                    {FooterPartnerItems.map((item)=>(
                      item.name=="advertise with us" ? (<li key={item.id} className='cursor-pointer hover:text-red-400'>{item.name}</li>) : (<li key={item.id} className='cursor-pointer hover:text-neutral-400'>{item.name}</li>)
                    ))}
                  </ul> */}
                  <ul className='mt-7'>
                  {FooterPartnerItems.map((item) => (
                    <li
                      key={item.id}
                      className={`hover:text-neutral-400 mb-[7px] cursor-pointer ${item.name === "Advertise With Us" ? 'text-black bg-[#F4BA03] rounded-md text-center' : 'text-white'}`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
                </div>
                <div>
                  <span className='uppercase font-bold footer-list-heading'>legal policy</span>
                  <ul className='mt-7'>
                  {FooterPolicyItems.map((item) => (
                    <li
                      key={item.id}
                      className={`hover:text-neutral-400 mb-[7px] cursor-pointer ${item.name === "Privacy Policy" ? 'text-black bg-[#F4BA03] rounded-md text-center' : 'text-white'}`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
                </div>
                <div>
                  <span className='uppercase font-bold footer-list-heading'>support center</span>
                  <ul className='mt-7'>
                    {FooterSupportItems.map((item)=>(
                      <li key={item.id} className='mb-[7px] cursor-pointer hover:text-neutral-400'>{item.name}</li>
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
            <div className='flex items-center justify-center w-full mt-5 text-center text-[#939588]'>
              <div>
                <p>© Copyright 2021 Maps of India All Rights Reserved</p>
                <p>We follow editorialcalls.org for border and boundary demarcations</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer