import React, { useState } from 'react'
import { NavLeftItems,NavRightItems ,NavItems} from '../constants/content'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  
  const[bars,setBars]=useState(false);
  const toggleNav=()=>{
    setBars(!bars);
  }

  return (
    <div>
      <nav className='nav-bar'>
        <ul className='nav-list'>
            <div className="list">
              {NavLeftItems.map((item)=>(
                  <li key={item.id} className='cursor-pointer hover:text-sky-400'>{item.name}</li>
                  
              ))}
              <li className='h-10 w-40 flex items-center justify-center'>
                <img src="logo-moi.png" alt="" className='w-full'/>
              </li>
              {NavRightItems.map((item)=>(
                  <li key={item.id} className='cursor-pointer hover:text-sky-400'>{item.name}</li>
              ))}
            </div>
            <div className='search-box pl-5'>
                <input type="text" id='search'/>
                <label htmlFor="search">Search</label>
            </div>
        </ul>
      </nav>
      <div className={`responsive-navlist ${bars ? 'active' : ''}`}>
      {bars ? (
          <IoMdClose className="close" onClick={toggleNav} aria-label="Close menu" />
            ) : (
              <FaBars className="bars" onClick={toggleNav} aria-label="Open menu" />
            )}
            <div className={`sidelist ${bars ? 'active' : ''}`}>
              {NavItems.map((item) => (
                <li key={item.id} className='mb-5 hover:bg-neutral-500 cursor-pointer w-full text-center duration-200 p-2 hover:text-white'>{item.name}</li>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Navbar