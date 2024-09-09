import React from 'react'
import About from './About'
import Footer from './Footer'
import GetCustomized from './GetCustomized'
import DifferentMaps from './DifferentMaps'
import MainMap from './MainMap'
import UsefulTools from './UsefulTools'
import BuyMaps from './BuyMaps'
import Heading from './Heading'

const MainContent = () => {
  return (
    <div className='mt-3  flex-col items-start lg:ml-10 md:ml-10 lg:w-[74%] md:w-[74%]'>
        <Heading/>
        <MainMap/>
        <BuyMaps/>
        <DifferentMaps/>
        <About/>
        <UsefulTools/>
        {/* <GetCustomized/>
        <Footer/> */}
    </div>
  )
}

export default MainContent