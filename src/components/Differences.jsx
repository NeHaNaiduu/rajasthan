import React from 'react'

const Differences = ({heading,info,btn1,btn2}) => {
  return (
    <div className='border-2 border-sky-600  p-4'>
        <div>
            <span className='font-bold'>{heading}</span>
            <p className='text-sm mt-3'>{info}</p>
            <div className='flex items-center font-semibold mt-5 text-sm text-white'>
                <button className='bg-red-500 pt-1 pb-1 p-3 rounded mr-3'>{btn1}</button>
                {btn2 !== '' && <button className='bg-red-500 pt-1 pb-1 p-3 rounded'>{btn2}</button>}
            </div>
        </div>
    </div>
  )
}

export default Differences