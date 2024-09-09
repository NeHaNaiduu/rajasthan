import React from 'react'
import { EnquiryItems } from '../constants/content'

const Enquiry = () => {
  return (
    <div className='for-enquiry'>
        <div className='font-sans text-[12px] font-bold'>
            <ul>
                {EnquiryItems.map((item)=>(
                    <li key={item.id} className=''>{item.name}</li>
                ))}
                <li className='text-[#007BB9]'>Rajasthan Map</li>
            </ul>
            <p className='text-[#007BB9]'>For Custom Business Map Quote +91 8929683196 | <span>apporv@mappingdigiworld.com</span></p>
        </div>
    </div>
  )
}

export default Enquiry