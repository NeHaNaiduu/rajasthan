import React from 'react'
import { MapTypes, CitiesRajasthan , PlacesRajasthan, HotelsRajasthan, UtilitiesRajasthan, EducationRajasthan, PhysicalRajasthan} from '../constants/content'

const Sidebar = () => {
  return (
    <div className='mt-3 w-1/5 sidebar'>
        <div>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Rajasthan</div>
                {PhysicalRajasthan.map((item)=>(
                    <li key={item.id} className='border-2 border-sky-600 rounded-md p-1 mb-2 text-sky-600 font-bold'>{item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Map of Rajasthan</div>
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Railway Time Table</div>
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Rajasthan Map</div>
                {MapTypes.map((item)=>(
                    <li key={item.id} className='border-2 border-sky-600 rounded-md p-1 mb-2 text-sky-600 font-bold'>{item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Places to visit in Rajasthan</div>
                {CitiesRajasthan.map((item)=>(
                    <li key={item.id} className='border-2 border-sky-600 rounded-md p-1 mb-2 text-sky-600 font-bold'>{item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Economy</div>
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Jaipur Airport</div>
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Jodhpur Airport</div>
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Villages of Rajasthan</div>
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Udaipur Airport</div>
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Kota Airport</div>
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Places to visit in Rajasthan</div>
                {PlacesRajasthan.map((item)=>(
                    <li key={item.id} className='border-2 border-sky-600 rounded-md p-1 mb-2 text-sky-600 font-bold'>{item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Hotels in Rajasthan</div>
                {HotelsRajasthan.map((item)=>(
                    <li key={item.id} className='border-2 border-blue-400 rounded-md p-1 mb-2 text-blue-500 font-bold'>{item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Utilities</div>
                {UtilitiesRajasthan.map((item)=>(
                    <li key={item.id} className='border-2 border-sky-600 rounded-md p-1 mb-2 text-sky-600 font-bold'>{item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Education</div>
                {EducationRajasthan.map((item)=>(
                    <li key={item.id} className='border-2 border-sky-600 rounded-md p-1 mb-2 text-sky-600 font-bold'>{item.name}</li>
                ))}
            </ul>
            <ul>
                <div className='border-2 border-sky-600 rounded-md p-1 text-white bg-sky-600 font-bold w-full mb-2'>Rajasthan Recipes</div>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar