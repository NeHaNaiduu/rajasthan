import React from 'react'
import Differences from './Differences'

const BuyMaps = () => {
  return (
    <div className='mt-3 '>
        <div className='md:flex items-center justify-between gap-6'>
           <Differences heading="Digital Map" info="Click here to purchase the digital (vector or rester) map file for use in print web, online or power point, this map is available for immediate download." btn1="Buy Digital file"
           btn2=''/>
           <Differences heading="Printed Wall Map" info="Click here to purchase the digital (vector or rester) map file for use in print web, online or power point, this map is available for immediate download." btn1="Buy from amazon"
           btn2="Buy from our store"/>
        </div>
    </div>
  )
}

export default BuyMaps