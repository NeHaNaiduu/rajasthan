import React from 'react'
import { EnquiryItems } from '../constants/content'

const Enquiry = () => {
  return (
    <div className='for-enquiry'>
        <div>
            <ul>
                {EnquiryItems.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <p className='text-sky-600'>For Custom Business Map Quote +91 8929683196 | <span>apporv@mappingdigiworld.com</span></p>
        </div>
    </div>
  )
}

export default Enquiry