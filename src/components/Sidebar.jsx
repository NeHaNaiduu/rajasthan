import React from 'react'
import { MapTypes, CitiesRajasthan , PlacesRajasthan, HotelsRajasthan, UtilitiesRajasthan, EducationRajasthan, PhysicalRajasthan} from '../constants/content'

const Sidebar = () => {
  return (
    <div className='font-sans mt-3 w-[230px] sidebar border-l-[1px] border-r-[1px] rounded-2xl border-[#D4D2D2]'>
        <div>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5 rounded-t-2xl'>Rajasthan</div>
                {PhysicalRajasthan.map((item)=>(
                    <li key={item.id} className='relative p-1 mb-1 font-bold text-[12px] pl-5 flex items-center group cursor-pointer'>
                        <div className='absolute left-0 translate-x-2 h-4 w-[2px] bg-red-500 transform opacity-0 transition-transform transition-opacity duration-300 group-hover:translate-x-2 group-hover:opacity-100'></div>
                        {item.name}
                    </li>
                ))}
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Map of Rajasthan</div>
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Railway Time Table</div>
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Rajasthan Map</div>
                {MapTypes.map((item)=>(
                    <li key={item.id} className='relative p-1 mb-1 font-bold text-[12px] pl-5 flex items-center group cursor-pointer'>
                        <div className='absolute left-0 translate-x-2 h-4 w-[2px] bg-red-500 transform opacity-0 transition-transform transition-opacity duration-300 group-hover:translate-x-2 group-hover:opacity-100'></div>
                        {item.name}</li>
                ))}
            </ul>
            <ul>
                <div className=' p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Places to visit in Rajasthan</div>
                {CitiesRajasthan.map((item)=>(
                    <li key={item.id} className='relative p-1 mb-1 font-bold text-[12px] pl-5 flex items-center group cursor-pointer'>
                        <div className='absolute left-0 translate-x-2 h-4 w-[2px] bg-red-500 transform opacity-0 transition-transform transition-opacity duration-300 group-hover:translate-x-2 group-hover:opacity-100'></div>
                        {item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5 '>Economy</div>
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Jaipur Airport</div>
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Jodhpur Airport</div>
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Villages of Rajasthan</div>
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Udaipur Airport</div>
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Kota Airport</div>
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Places to visit in Rajasthan</div>
                {PlacesRajasthan.map((item)=>(
                    <li key={item.id} className='relative p-1 mb-1 font-bold text-[12px] pl-5 flex items-center group cursor-pointer'>
                        <div className='absolute left-0 translate-x-2 h-4 w-[2px] bg-red-500 transform opacity-0 transition-transform transition-opacity duration-300 group-hover:translate-x-2 group-hover:opacity-100'></div>
                        {item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Hotels in Rajasthan</div>
                {HotelsRajasthan.map((item)=>(
                    <li key={item.id} className='relative p-1 mb-1 font-bold text-[12px] pl-5 flex items-center group cursor-pointer'>
                        <div className='absolute left-0 translate-x-2 h-4 w-[2px] bg-red-500 transform opacity-0 transition-transform transition-opacity duration-300 group-hover:translate-x-2 group-hover:opacity-100'></div>
                        {item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Utilities</div>
                {UtilitiesRajasthan.map((item)=>(
                    <li key={item.id} className='relative p-1 mb-1 font-bold text-[12px] pl-5 flex items-center group cursor-pointer'>
                        <div className='absolute left-0 translate-x-2 h-4 w-[2px] bg-red-500 transform opacity-0 transition-transform transition-opacity duration-300 group-hover:translate-x-2 group-hover:opacity-100'></div>
                        {item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full mb-2 text-[14px] pl-5'>Education</div>
                {EducationRajasthan.map((item)=>(
                    <li key={item.id} className='relative p-1 mb-1 font-bold text-[12px] pl-5 flex items-center group cursor-pointer'>
                        <div className='absolute left-0 translate-x-2 h-4 w-[2px] bg-red-500 transform opacity-0 transition-transform transition-opacity duration-300 group-hover:translate-x-2 group-hover:opacity-100'></div>
                        {item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='p-1 text-white bg-gradient-to-r from-[#007BB9] to-[#3CB3DF] font-bold w-full  rounded-b-2xl text-[14px] pl-5'>Rajasthan Recipes</div>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar