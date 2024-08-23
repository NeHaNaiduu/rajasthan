import React from 'react'
import About from './About'
import Footer from './Footer'
import GetCustomized from './GetCustomized'
import DifferentMaps from './DifferentMaps'
import MainMap from './MainMap'
import UsefulTools from './UsefulTools'
import BuyMaps from './BuyMaps'

const MainContent = () => {
  return (
    <div className='flex-col items-start md:ml-10 md:w-4/5'>
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