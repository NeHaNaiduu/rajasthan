import React from 'react'
import { Information } from '../constants/content'
import Tables from './Tables'
import TransportTable from './TransportTable'

const About = () => {
  return (
    <div className='main-content w-full flex items-center justify-center'>
        <div className='w-full'>
            <ul>
                {Information.map((item)=>(
                    <li className='mb-10'>
                        <h3 className='relative font-bold text-2xl mb-4'>
                            {item.heading}
                            <div className='w-1/6 bg-red-500 h-1 absolute '></div>
                        </h3>
                        <p className='flex-wrap w-full'>{item.paragraph}</p>
                    </li>
                ))}
                <li className='mb-10 w-full'>
                    <h3 className='relative font-bold text-2xl mb-4'>
                        Transport
                        <div className='w-1/6 bg-red-500 h-1 absolute '></div>
                    </h3>
                    <TransportTable/>
                </li>
                <li className='mb-10 w-full'>
                    <h3 className='relative font-bold text-2xl mb-4'>
                        Districts in Rajasthan
                        <div className='w-1/6 bg-red-500 h-1 absolute '></div>
                    </h3>
                    <div className='districts-table mt-10'>
                    <div className='w-full md:flex items-center justify-center'>
                    <table className='w-full border-2 border-neutral-600'>
                        <tr className='border-2 border-neutral-600'>
                            <th className='pl-4 p-2'>District</th>
                            <th>Headquarters</th>
                            <th>Division</th>
                            <th>Population</th>
                            <th>Area</th>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Ajmer</td>
                            <td>Ajmer</td>
                            <td>Ajmer</td>
                            <td>2584913</td>
                            <td>8481</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Alwar </td>
                            <td>Alwar</td>
                            <td>Jaipur</td>
                            <td>3671999</td>
                            <td>8380</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Banswara</td>
                            <td>Banswara</td>
                            <td>Udaipur</td>
                            <td>1798194</td>
                            <td>5037</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Baran</td>
                            <td>Baran</td>
                            <td>Kota</td>
                            <td>1223921</td>
                            <td>6955</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Barmer</td>
                            <td>Barmer</td>
                            <td>Jodhpur</td>
                            <td>2604453</td>
                            <td>28387</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Bharatpur</td>
                            <td>Bharatpur</td>
                            <td>Bharatpur</td>
                            <td>2549121</td>
                            <td>5066</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Bhilwara</td>
                            <td>Bhilwara</td>
                            <td>Ajmer</td>
                            <td>2410459</td>
                            <td>10455</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Bikaner</td>
                            <td>Bikaner</td>
                            <td>Bikaner</td>
                            <td>2367745</td>
                            <td>27244</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Churu</td>
                            <td>Churu</td>
                            <td>Bikaner</td>
                            <td>2041172</td>
                            <td>16830</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Dausa</td>
                            <td>Dausa</td>
                            <td>Jaipur</td>
                            <td>1637226</td>
                            <td>2950</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Dholpur</td>
                            <td>Dholpur</td>
                            <td>Bharatpur</td>
                            <td>1207293</td>
                            <td>3084</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Dungarpur</td>
                            <td>Dungarpur</td>
                            <td>Udaipur</td>
                            <td>1388906</td>
                            <td>3770</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Hanumangarh</td>
                            <td>Hanumangarh</td>
                            <td>Bikaner</td>
                            <td>1779650</td>
                            <td>12645</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Jaipur</td>
                            <td>Jaipur</td>
                            <td>Jaipur</td>
                            <td>6663971</td>
                            <td>14068</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Jaisalmer</td>
                            <td>Jaisalmer</td>
                            <td>Jodhpur</td>
                            <td>6720083</td>
                            <td>8401</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Jalor</td>
                            <td>Jalore</td>
                            <td>Jodhpur</td>
                            <td>1830151</td>
                            <td>10640</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Jhalawar</td>
                            <td>Jhalawar</td>
                            <td>Kota</td>
                            <td>1411327</td>
                            <td>6219</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Jhunjhunu</td>
                            <td>Jhunjhunu</td>
                            <td>Jaipur</td>
                            <td>2139658</td>
                            <td>5928</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Bhilwara</td>
                            <td>Bhilwara</td>
                            <td>Ajmer</td>
                            <td>2410459</td>
                            <td>10455</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Karauli</td>
                            <td>Karauli</td>
                            <td>Bharatpur</td>
                            <td>1458459</td>
                            <td>5530</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Kota</td>
                            <td>Kota</td>
                            <td>Kota</td>
                            <td>1950491</td>
                            <td>12436</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Nagaur</td>
                            <td>Nagaur</td>
                            <td>Ajmer</td>
                            <td>3309234</td>
                            <td>17718</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Pali</td>
                            <td>Pali</td>
                            <td>Jodhpur</td>
                            <td>2038533</td>
                            <td>12387</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Pratapgarh</td>
                            <td>Pratapgarh</td>
                            <td>Udaipur</td>
                            <td>8682314</td>
                            <td>1173.6</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Rajsamand</td>
                            <td>Rajsamand</td>
                            <td>Udaipur</td>
                            <td>1158283</td>
                            <td>4768</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Sawai Madhopur</td>
                            <td>Sawai Madhopur</td>
                            <td>Bharatpur</td>
                            <td>1338114</td>
                            <td>10527</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Sikar</td>
                            <td>Sikar</td>
                            <td>Jaipur</td>
                            <td>2677737</td>
                            <td>7732</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Sirohi</td>
                            <td>Sirohi</td>
                            <td>Jodhpur</td>
                            <td>1037185</td>
                            <td>5136</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Sri Ganganagr</td>
                            <td>Sri Ganganagar</td>
                            <td>Bikaner</td>
                            <td>1969520</td>
                            <td>7984</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Tonk</td>
                            <td>Tonk</td>
                            <td>Ajmer</td>
                            <td>1421711</td>
                            <td>7194</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Udaipur</td>
                            <td>Udaipur</td>
                            <td>Udaipur</td>
                            <td>3067549</td>
                            <td>17279</td>
                        </tr>
                        <tr className='border'>
                            <td className='pl-4'>Rajasthan</td>
                            <td>Jaipur</td>
                            <td></td>
                            <td>68621012</td>
                            <td>342239</td>
                        </tr>
                    </table>
                    </div>
                    </div>
                </li>
                <li className='mb-10 w-full'>
                    <h3 className='relative font-bold text-2xl mb-4'>
                        Maps in Other Regional Languages
                        <div className='w-1/6 bg-red-500 h-1 absolute '></div>
                    </h3>
                    <ul className='text-sky-600 mb-4 mt-5'>
                        <li><a href="#">View Rajasthani Map in Malyalam</a></li>
                        <li><a href="#">View Rajasthani Map in Hindi</a></li>
                    </ul>
                    <span className='font-extrabold'>PB31.01.2017</span>
                    <div className='flex items-center justify-center mt-4'>
                        <div className='w-full border-2 border-neutral-600 p-5 pt-3 pb-3'>
                            <span className='uppercase font-bold text-sky-600'>do you know?</span>
                            <p className='mt-2 text-xs font-semibold'>All Civil Services Examination aspirants out there! Learn more about the Indian geography on our resource-oriented platform, Maps of India.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <h3 className='relative font-bold text-2xl mb-4'>
                        PB31 Last Updated on : September 21,2021.01.2017
                        <div className='w-1/6 bg-red-500 h-1 absolute '></div>
                    </h3>
                    <Tables/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default About