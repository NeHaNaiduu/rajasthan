import React from 'react'

const TransportTable = () => {
  return (
    <div className='districts-table mt-10 shadow-md'>
        <div className='w-full flex-col items-center justify-center'>
            <div className='w-full font-semibold bg-sky-600 text-white p-2 pl-4'>Rajasthan State Information</div>
            <table className='w-full border-2 border-neutral-100 text-sm'>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>Capital</td>
                    <td>Jaipur</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>Date of formation</td>
                    <td>30/03/49</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>Governer</td>
                    <td>Kalraj Mishra</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>Chief Minister</td>
                    <td>Ashok Mehlot</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>Languages</td>
                    <td>Rajasthani, Hindi</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>Festivals</td>
                    <td>Teej, Gangaur festival, Bikaner festival, Marwar festival</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>State Animals</td>
                    <td>Camel and Chinkara</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>State Bird</td>
                    <td>Godawan</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>State</td>
                    <td>Khejri</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>No. of District</td>
                    <td>33</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>Major Crops</td>
                    <td>Jowar, Pulses, Maize, Gram</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>Rivers</td>
                    <td>Luni, Banas, Kali, Sindh, Chana</td>
                </tr>
                <tr className='border-b-2 border-blue-300'>
                    <td className='p-1 pl-4'>Factoids</td>
                    <td>Jaipur's Elephant Festival has a tug-of-war between humans and elephants.</td>
                </tr>
                <tr className='border-b-0 border-blue-300'>
                    <td className='p-1 pl-4'>Forests and Wildlife Sanctuaries</td>
                    <td>Sariska Tiger Reserve, Keoladeo Ghana NP, Ranthambore NP, Dhawa WS</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default TransportTable