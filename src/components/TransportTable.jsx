import React from 'react'

const TransportTable = () => {
  return (
    <div className='districts-table mt-10 shadow-main rounded-2xl'>
        <div className='w-full flex-col items-center justify-center px-10 py-2  rounded-2xl font-sans shadow-tertiary'>
            <div className='w-full font-bold p-2 pl-4 border-b border-red-500 mb-2'>Rajasthan State Information</div>
            <table className='w-full text-[12px] font-sans font-semibold'>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Capital</td>
                    <td className='pl-7'>Jaipur</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Date of formation</td>
                    <td className='pl-7'>30/03/49</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Governer</td>
                    <td className='pl-7'>Kalraj Mishra</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Chief Minister</td>
                    <td className='pl-7'>Ashok Mehlot</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Languages</td>
                    <td className='pl-7'>Rajasthani, Hindi</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Festivals</td>
                    <td className='pl-7'>Teej, Gangaur festival, Bikaner festival, Marwar festival</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>State Animals</td>
                    <td className='pl-7'>Camel and Chinkara</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>State Bird</td>
                    <td className='pl-7'>Godawan</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>State</td>
                    <td className='pl-7'>Khejri</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>No. of District</td>
                    <td className='pl-7'>33</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Major Crops</td>
                    <td className='pl-7'>Jowar, Pulses, Maize, Gram</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Rivers</td>
                    <td className='pl-7'>Luni, Banas, Kali, Sindh, Chana</td>
                </tr>
                <tr className='border-b-2 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Factoids</td>
                    <td className='pl-7'>Jaipur's Elephant Festival has a tug-of-war between humans and elephants.</td>
                </tr>
                <tr className='border-b-0 border-[#E8E8E8]'>
                    <td className='p-1 pl-4'>Forests and Wildlife Sanctuaries</td>
                    <td className='pl-7'>Sariska Tiger Reserve, Keoladeo Ghana NP, Ranthambore NP, Dhawa WS</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default TransportTable