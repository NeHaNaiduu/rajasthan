import React from 'react'
import { Tools } from '../constants/content'

const UsefulTools = () => {
  return (
    <div className='overflow-x-scroll md:overflow-x-hidden flex items-center justify-center mb-10'>
        <div className='mt-10 mb-10'>
        <div>
            <h3 className='relative flex items-center justify-center font-bold text-2xl mb-14'>
                Useful Tools
                <div className='w-28 bg-red-500 h-1 absolute -bottom-2'></div>
            </h3>
            <div className='flex items-center justify-center'>
                <div className='flex items-center'>
                    {Tools.map((tool)=>(
                        <div key={tool.id} className='flex items-center common-tools'>
                            <div className='w-16'>
                                <img src={tool.href} alt="" />
                            </div>
                            <p className='tool-name text-xs mx-1'>{tool.name}</p>
                            <div className='w-1 h-14 mr-2 bg-orange-600 divider-line'></div>
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