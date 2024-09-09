import React from 'react'
import { Tools } from '../constants/content'

const UsefulTools = () => {
  return (
    <div className='overflow-x-scroll md:overflow-x-hidden flex items-center  mb-10 font-sans w-full'>
        <div className='mb-10'>
        <div className=''>
            <h3 className='font-bold pl-4 border-l-4 mb-12 border-[#FF0000] text-[16px]'>
                Useful Tools
                {/* <div className='w-28 bg-red-500 h-1 absolute -bottom-2'></div> */}
            </h3>
            <div className='flex items-center justify-center'>
                <div className='flex items-center'>
                    {Tools.map((tool)=>(
                        <div key={tool.id} className='flex items-center common-tools cursor-pointer'>
                            <div className='w-16 mr-2'>
                                <img src={tool.href} alt="" />
                            </div>
                            <p className='tool-name text-xs font-sans text-[14px] font-semibold'>{tool.name}</p>
                            <div className='w-[3px] h-14 mr-[0.5rem] bg-[#FF0000] divider-line'></div>
                        </div>    
                    ))}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UsefulTools