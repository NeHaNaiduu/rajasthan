// import React, { useState } from 'react'
// import { NavLeftItems,NavRightItems ,NavItems} from '../constants/content'
// import { FaBars } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";


// const Navbar = () => {
  
//   const[bars,setBars]=useState(false);
//   const toggleNav=()=>{
//     setBars(!bars);
//   }

//   return (
//     <div>
//       <nav className='nav-bar bg-[#F1F8F9]'>
//         <ul className='nav-list font-sans'>
//             <div className="list">
//               {NavLeftItems.map((item)=>(
//                   <li key={item.id} className='cursor-pointer hover:text-sky-400 text-[14px]'>{item.name}</li>
//               ))}
//               <li className='h-10 w-40 flex items-center justify-center'>
//                 <img src="logo-moi.png" alt="" className='w-full'/>
//               </li>
//               {NavRightItems.map((item)=>(
//                   <li key={item.id} className='cursor-pointer hover:text-sky-400 text-[14px]'>{item.name}</li>
//               ))}
//             </div>
//             <div className='search-box pl-5'>
//                 <input type="text" id='search'/>
//                 <label htmlFor="search" className='text-[14px]'>Search</label>
//             </div>
//         </ul>
//       </nav>
//       <div className={`responsive-navlist ${bars ? 'active' : ''}`}>
//       {bars ? (
//           <IoMdClose className="close" onClick={toggleNav} aria-label="Close menu" />
//             ) : (
//               <FaBars className="bars" onClick={toggleNav} aria-label="Open menu" />
//             )}
//             <div className={`sidelist ${bars ? 'active' : ''}`}>
//               {NavItems.map((item) => (
//                 <li key={item.id} className='mb-5 hover:bg-neutral-500 cursor-pointer w-full text-center duration-200 p-2 hover:text-white'>{item.name}</li>
//               ))}
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";


const Navbar = () => {

  const[bars,setBars]=useState(false);
  const[englishopen,setenglishOpen]=useState(true);
  const[electionsopen,setelectionsOpen]=useState(true);
  const[mapsopen,setmapsOpen]=useState(true);
  const[myindiaopen,setmyindiaOpen]=useState(true);
  const[travelopen,settravelOpen]=useState(true);
  const[servicesopen,setservicesOpen]=useState(true);
  const[othersopen,setothersOpen]=useState(true);
  const[indiamapsopen,setindiamapsOpen]=useState(true);
  const[worldmapsopen,setworldmapsOpen]=useState(true);
  const[statemapsopen,setstatemapsOpen]=useState(true);
  const[utilitymapsopen,setutilitymapsOpen]=useState(true);
  const[languagemapsopen,setlanguagemapsOpen]=useState(true);
  const[thematicmapsopen,setthematicmapsOpen]=useState(true);
  const[myindiatravelopen,setmyindiatravelOpen]=useState(true);
  const[myindiafoodopen,setmyindiafoodOpen]=useState(true);
  const[myindiareviewsopen,setmyindiareviewsOpen]=useState(true);
  const[myindiamoviesopen,setmyindiamoviesOpen]=useState(true);
  const[myindiapoliticsopen,setmyindiapoliticsOpen]=useState(true);

  const[showenglishsubmenu,setShowenglishsubmenu]=useState(false);
  const[showelectionssubmenu,setShowelectionssubmenu]=useState(false);
  const[showmapssubmenu,setShowmapssubmenu]=useState(false);
  const[showmyindiasubmenu,setShowmyindiasubmenu]=useState(false);
  const[showtravelsubmenu,setShowtravelsubmenu]=useState(false);
  const[showservicessubmenu,setShowservicessubmenu]=useState(false);
  const[showothersubmenu,setShowothersubmenu]=useState(false);
  const[showindiamapssubmenu,setShowindiamapssubmenu]=useState(false);
  const[showworldmapssubmenu,setShowworldmapssubmenu]=useState(false);
  const[showstatemapssubmenu,setShowstatemapssubmenu]=useState(false);
  const[showutilitymapssubmenu,setShowutilitymapssubmenu]=useState(false);
  const[showlanguagemapssubmenu,setShowlanguagemapssubmenu]=useState(false);
  const[showthematicmapssubmenu,setShowthematicmapssubmenu]=useState(false);
  const[showmyindiatravelsubmenu,setShowmyindiatravelsubmenu]=useState(false);
  const[showmyindiafoodsubmenu,setShowmyindiafoodsubmenu]=useState(false);
  const[showmyindiareviewssubmenu,setShowmyindiareviewssubmenu]=useState(false);
  const[showmyindiamoviessubmenu,setShowmyindiamoviessubmenu]=useState(false);
  const[showmyindiapoliticssubmenu,setShowmyindiapoliticssubmenu]=useState(false);
  const toggleNav=()=>{
    setBars(!bars);
  }

  const englishPlus=()=>{
    setShowenglishsubmenu(true);
    setenglishOpen(false);
  }
  const englishMinus=()=>{
    setShowenglishsubmenu(false);
    setenglishOpen(true);
  }
  const electionsPlus=()=>{
    setShowelectionssubmenu(true);
    setelectionsOpen(false)
  }
  const electionsMinus=()=>{
    setShowelectionssubmenu(false);
    setelectionsOpen(true)
  }
  const mapsPlus=()=>{
    setShowmapssubmenu(true);
    setmapsOpen(false)
  }
  const mapsMinus=()=>{
    setShowmapssubmenu(false);
    setmapsOpen(true)
  }
  const myindiaPlus=()=>{
    setShowmyindiasubmenu(true);
    setmyindiaOpen(false)
  }
  const myindiaMinus=()=>{
    setShowmyindiasubmenu(false);
    setmyindiaOpen(true)
  }
  const travelPlus=()=>{
    setShowtravelsubmenu(true);
    settravelOpen(false)
  }
  const travelMinus=()=>{
    setShowtravelsubmenu(false);
    settravelOpen(true)
  }
  const servicesPlus=()=>{
    setShowservicessubmenu(true);
    setservicesOpen(false)
  }
  const servicesMinus=()=>{
    setShowservicessubmenu(false);
    setservicesOpen(true)
  }
  const othersPlus=()=>{
    setShowothersubmenu(true);
    setothersOpen(false)
  }
  const othersMinus=()=>{
    setShowothersubmenu(false);
    setothersOpen(true)
  }
  const indiamapsPlus=()=>{
    setShowindiamapssubmenu(true);
    setindiamapsOpen(false)
  }
  const indiamapsMinus=()=>{
    setShowindiamapssubmenu(false);
    setindiamapsOpen(true)
  }
  const worldmapsPlus=()=>{
    setShowworldmapssubmenu(true);
    setworldmapsOpen(false);
  }
  const worldmapsMinus=()=>{
    setShowworldmapssubmenu(false);
    setworldmapsOpen(true);
  }
  const statemapsPlus=()=>{
    setShowstatemapssubmenu(true);
    setstatemapsOpen(false);
  }
  const statemapsMinus=()=>{
    setShowstatemapssubmenu(false);
    setstatemapsOpen(true);
  }
  const utilitymapsPlus=()=>{
    setShowutilitymapssubmenu(true);
    setutilitymapsOpen(false);
  }
  const utilitymapsMinus=()=>{
    setShowutilitymapssubmenu(false);
    setutilitymapsOpen(true);
  }
  const languagemapsPlus=()=>{
    setShowlanguagemapssubmenu(true);
    setlanguagemapsOpen(false);
  }
  const languagemapsMinus=()=>{
    setShowlanguagemapssubmenu(false);
    setlanguagemapsOpen(true);
  }
  const thematicmapsPlus=()=>{
    setShowthematicmapssubmenu(true);
    setthematicmapsOpen(false);
  }
  const thematicmapsMinus=()=>{
    setShowthematicmapssubmenu(false);
    setthematicmapsOpen(true);
  }
  const myindiatravelPlus=()=>{
    setShowmyindiatravelsubmenu(true);
    setmyindiatravelOpen(false);
  }
  const myindiatravelMinus=()=>{
    setShowmyindiatravelsubmenu(false);
    setmyindiatravelOpen(true);
  }
  const myindiafoodPlus=()=>{
    setShowmyindiafoodsubmenu(true);
    setmyindiafoodOpen(false);
  }
  const myindiafoodMinus=()=>{
    setShowmyindiafoodsubmenu(false);
    setmyindiafoodOpen(true);
  }
  const myindiareviewsPlus=()=>{
    setShowmyindiareviewssubmenu(true);
    setmyindiareviewsOpen(false);
  }
  const myindiareviewsMinus=()=>{
    setShowmyindiareviewssubmenu(false);
    setmyindiareviewsOpen(true);
  }
  const myindiamoviesPlus=()=>{
    setShowmyindiamoviessubmenu(true);
    setmyindiamoviesOpen(false);
  }
  const myindiamoviesMinus=()=>{
    setShowmyindiamoviessubmenu(false);
    setmyindiamoviesOpen(true);
  }
  const myindiapoliticsPlus=()=>{
    setShowmyindiapoliticssubmenu(true);
    setmyindiapoliticsOpen(false);
  }
  const myindiapoliticsMinus=()=>{
    setShowmyindiapoliticssubmenu(false);
    setmyindiapoliticsOpen(true);
  }

  return (
    <div className='md:flex flex-col md:items-center justify-center w-full bg-[#f1f8f9] text-[#333] mx-auto lg:px-32 px-5 py-2 lg:py-0   navbar font-bold'>
      <div className='flex items-center justify-between w-full mx-auto'>
        <div className='lg:hidden'>
          {bars ? (<IoClose onClick={()=>setBars(false)}/>) : (<FaBars onClick={toggleNav}/>)}
        </div>
        <div className='hidden lg:block'>
          <ul className=' flex items-center justify-between text-[14px]'>
            <li className='pr-6 py-4  relative' onMouseOver={()=>setShowenglishsubmenu(true)} onMouseLeave={()=>setShowenglishsubmenu(false)}>
              <a href="#">English</a>
              {showenglishsubmenu && (<ul className='submenu absolute top-12 bg-custom-gray z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Hindi</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Bengali</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Malayalam</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Tamil</a>
                </li>
              </ul>)}
            </li>
            <li className='pr-6 py-4 relative' onMouseOver={()=>setShowelectionssubmenu(true)} onMouseLeave={()=>setShowelectionssubmenu(false)}>
              <a href="#">Elections</a>
              {showelectionssubmenu && (<ul className='submenu absolute top-12 bg-custom-gray z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Assembly Election</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Punjab Election</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Uttar Pradesh Election</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Uttarakhand Election</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Goa Election</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Manipur Election</a>
                </li>
              </ul>)}
            </li>
            <li className='pr-6 py-4 relative' onMouseOver={()=>setShowmapssubmenu(true)} onMouseLeave={()=>setShowmapssubmenu(false)}>
              <a href="#">Maps</a>
              {showmapssubmenu && (<ul className='submenu absolute top-12 bg-custom-gray z-10 p-3'>
                <li className='mb-2 relative' onMouseOver={()=>setShowindiamapssubmenu(true)} onMouseLeave={()=>setShowindiamapssubmenu(false)}>
                  <a href="#">India Maps</a>
                  {showindiamapssubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Political Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Physical Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Outline Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">River Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Road Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Climate Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Topographic Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Soil Map</a>
                </li>
              </ul>)}
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowworldmapssubmenu(true)} onMouseLeave={()=>setShowworldmapssubmenu(false)}>
                  <a href="#">World Maps</a>
                  {showworldmapssubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">World Physical Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Outline Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Lat-Long Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Climate Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Population Density Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Time Zone Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Language Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Ocean Map</a>
                </li>
              </ul>)}
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowstatemapssubmenu(true)} onMouseLeave={()=>setShowstatemapssubmenu(false)}>
                  <a href="#">State Maps</a>
                  {showstatemapssubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Maharashtra</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Uttar Pradesh</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Rajasthan</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Tamil Nadu</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Karnataka</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Kerala</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Andhra Pradesh</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Gujarat</a>
                </li>
              </ul>)}
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowutilitymapssubmenu(true)} onMouseLeave={()=>setShowutilitymapssubmenu(false)}>
                  <a href="#">Utility Maps</a>
                  {showutilitymapssubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Distances</a>
                </li>
                <li className='mb-2'>
                  <a href="#">International Flights</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Domestic Flights</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Railway Time Table</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Bus Schedule</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Pin Code</a>
                </li>
                <li className='mb-2'>
                  <a href="#">STD Code</a>
                </li>
                <li className='mb-2'>
                  <a href="#">IFSC Code</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Villages</a>
                </li>
              </ul>)}
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowlanguagemapssubmenu(true)} onMouseLeave={()=>setShowlanguagemapssubmenu(false)}>
                  <a href="#">Language Maps</a>
                  {showlanguagemapssubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Bengali</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Hindi</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Kannada</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Malayalam</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Marathi</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Telugu</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Punjabi</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Tamil</a>
                </li>
              </ul>)}
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowthematicmapssubmenu(true)} onMouseLeave={()=>setShowthematicmapssubmenu(false)}>
                  <a href="#">Thematic Maps</a>
                  {showthematicmapssubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Topographic Map For Kids</a>
                </li>
                <li className='mb-2'>
                  <a href="#">India River Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Census 2011</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Languages Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Fruits Map of India</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Information On India Maps</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Zonal Maps Of India</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Neighbouring Countries Of India</a>
                </li>
              </ul>)}
                </li>
              </ul>)}
            </li>
            <li className='pr-4 py-4 relative' onMouseOver={()=>setShowmyindiasubmenu(true)} onMouseLeave={()=>setShowmyindiasubmenu(false)}>
              <a href="#">My India</a>
              {showmyindiasubmenu && (<ul className='submenu absolute top-12 bg-custom-gray z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">My India</a>
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowmyindiatravelsubmenu(true)} onMouseLeave={()=>setShowmyindiatravelsubmenu(false)}>
                  <a href="#">Travel</a>
                  {showmyindiatravelsubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Unusual India</a>
                </li>
              </ul>)}
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowmyindiafoodsubmenu(true)} onMouseLeave={()=>setShowmyindiafoodsubmenu(false)}>
                  <a href="#">Food</a>
                  {showmyindiafoodsubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Beverages Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Breads</a>
                </li><li className='mb-2'>
                  <a href="#">Breakfast Recipes</a>
                </li><li className='mb-2'>
                  <a href="#">Continental Food Recipes</a>
                </li><li className='mb-2'>
                  <a href="#">Desserts And Sweets Recipes</a>
                </li><li className='mb-2'>
                  <a href="#">Festival And Celebration Cuisines</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Chinese Cuisines</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Main Course Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Pickles And Chutney Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Raita Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Starters Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Street Food Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Vegetarian Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Italian Food Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Low Calorie Food Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Non Vegetarian Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">North Indian Food Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Salad Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Seafood</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Soups Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">South Indian Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Special Food Recipes For Kids</a>
                </li>
              </ul>)}
                </li>
                <li className='mb-2'>
                  <a href="#">IMO</a>
                </li>
                <li className='mb-2'>
                  <a href="#">India</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Cricket</a>
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowmyindiareviewssubmenu(true)} onMouseLeave={()=>setShowmyindiareviewssubmenu(false)}>
                  <a href="#">Reviews</a>
                  {showmyindiareviewssubmenu && (<ul className='submenu absolute bg-[#cacaca] -top-3 left-[138px] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Book Reviews</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Restaurant Food Reviews</a>
                </li><li className='mb-2'>
                  <a href="#">Movies</a>
                </li>
              </ul>)}
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowmyindiamoviessubmenu(true)} onMouseLeave={()=>setShowmyindiamoviessubmenu(false)}>
                  <a href="#">Movies</a>
                  {showmyindiamoviessubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Upcoming Movies</a>
                </li>
              </ul>)}
                </li>
                <li className='mb-2 relative' onMouseOver={()=>setShowmyindiapoliticssubmenu(true)} onMouseLeave={()=>setShowmyindiapoliticssubmenu(false)}>
                  <a href="#">Politics</a>
                  {showmyindiapoliticssubmenu && (<ul className='submenu absolute -top-3 left-[138px] bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Bihar Election</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Election Updates</a>
                </li>
              </ul>)}
                </li>
              </ul>)}
            </li>
          </ul>
        </div>
        <div className=''>
          <img src="logo-moi.png" alt="" />
        </div>
        <div className='hidden lg:block'>
          <ul className='flex items-center justify-between text-[14px] font-bold'>
          <li className='pr-4 py-4 relative' onMouseOver={()=>setShowtravelsubmenu(true)} onMouseLeave={()=>setShowtravelsubmenu(false)}>
              <a href="#">Travel</a>
              {showtravelsubmenu && (<ul className='submenu absolute top-12 bg-custom-gray z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Munnar</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Coorg</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Goa</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Ooty</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Shimla</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Jammu And Kashmir</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Manali</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Kanyakumari</a>
                </li>
              </ul>)}
            </li>
            <li className='pr-4 py-4 relative' onMouseOver={()=>setShowservicessubmenu(true)} onMouseLeave={()=>setShowservicessubmenu(false)}>
              <a href="#">Services</a>
              {showservicessubmenu && (<ul className='submenu absolute top-12 bg-custom-gray z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Store</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Village Boundary Maps</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Pin Code Boundary Maps</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Boundary Maps</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Election Maps</a>
                </li>
                <li className='mb-2'>
                  <a href="#">GIS Mapping</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Map Based Business Intelligence Solutions</a>
                </li>
              </ul>)}
            </li>
            <li className='pr-4 py-4 relative' onMouseOver={()=>setShowothersubmenu(true)} onMouseLeave={()=>setShowothersubmenu(false)}>
              <a href="#">Other</a>
              {showothersubmenu && (<ul className='submenu absolute top-12 bg-custom-gray z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Business</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Sports</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Automobiles</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Education</a>
                </li>
              </ul>)}
            </li>
          </ul>
        </div>
        <div className='text-[14px] font-bold  items-center hidden lg:flex'>
          <div className='relative'>
            <input type="text" id='search-box' className='p-[1px] border-2 border-neutral-500' />
            <img src="branding.png" alt="" className='absolute top-2 left-3'/>
          </div>
          <label htmlFor="search-box" className='bg-[#F0F0F0] px-2 py-[1px] ml-1 border-2 border-neutral-400'>Search</label>
        </div>
      </div>
      <div className='flex justify-start items-start w-full'>
      <div className='text-[14px] font-bold  items-center flex mt-5 lg:hidden'>
          <div className='relative'>
            <input type="text" id='search-box' className='p-[1px] border-2 border-neutral-500' />
            <img src="branding.png" alt="" className='absolute top-2 left-3'/>
          </div>
          <label htmlFor="search-box" className='bg-[#F0F0F0] px-2 py-[1px] ml-1 border-2 border-neutral-400'>Search</label>
      </div>
      </div>
      <div className='lg:hidden w-full'>
          {bars && (
            <div>
              <div className='w-full'>
              <div className=''>
          <ul className=' flex-col items-center justify-between text-[14px]'>
            <li className={`pr-6 py-4 flex justify-between items-center relative ${showenglishsubmenu ? 'pb-40' : 'pb-4'}`} 
            >
              <a href="#">English</a>
              {showenglishsubmenu && (<ul className='submenu absolute top-10 left-0 bg-custom-gray z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Hindi</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Bengali</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Malayalam</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Tamil</a>
                </li>
              </ul>)}
              {englishopen ? <FaPlus onClick={englishPlus}/> : <RiSubtractFill onClick={englishMinus}/>}
            </li>
            <li className={`pr-6 flex items-center justify-between py-4 relative ${showelectionssubmenu ? 'pb-80' : 'pb-4'}`} >
              <a href="#">Elections</a>
              {showelectionssubmenu && (<ul className='submenu absolute top-10 left-0 bg-custom-gray z-10 p-3'>
                <li className='mb-2 py-2'>
                  <a href="#">Assembly Election</a>
                </li>
                <li className='mb-2 py-2'>
                  <a href="#">Punjab Election</a>
                </li>
                <li className='mb-2 py-2'>
                  <a href="#">Uttar Pradesh Election</a>
                </li>
                <li className='mb-2 py-2'>
                  <a href="#">Uttarakhand Election</a>
                </li>
                <li className='mb-2 py-2'>
                  <a href="#">Goa Election</a>
                </li>
                <li className='mb-2 py-2'>
                  <a href="#">Manipur Election</a>
                </li>
              </ul>)}
              {electionsopen ? <FaPlus onClick={electionsPlus}/> : <RiSubtractFill onClick={electionsMinus}/>}
            </li>
            <li className={`pr-6 flex items-center justify-between py-4 relative ${showmapssubmenu ? 'pb-72' : 'pb-4'}`} >
              <a href="#">Maps</a>
              {showmapssubmenu && (<ul className='submenu absolute top-10 left-0 bg-custom-gray z-10 p-3'>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showindiamapssubmenu ? 'pb-72' : 'pb-4'}`} >
                  <a href="#">India Maps</a>
                  {showindiamapssubmenu && (<ul className='submenu absolute top-10 left-0 bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Political Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Physical Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Outline Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">River Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Road Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Climate Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Topographic Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Soil Map</a>
                </li>
              </ul>)}
              {indiamapsopen ? <FaPlus onClick={indiamapsPlus}/> : <RiSubtractFill onClick={indiamapsMinus}/>}
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showworldmapssubmenu ? 'pb-72' : 'pb-4'}`} >
                  <a href="#">World Maps</a>
                  {showworldmapssubmenu && (<ul className='submenu absolute top-10 left-0 bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">World Physical Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Outline Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Lat-Long Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Climate Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Population Density Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Time Zone Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Language Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">World Ocean Map</a>
                </li>
              </ul>)}
              {worldmapsopen ? <FaPlus onClick={worldmapsPlus}/> : <RiSubtractFill onClick={worldmapsMinus}/>}
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showstatemapssubmenu ? 'pb-72' : 'pb-4'}`} >
                  <a href="#">State Maps</a>
                  {showstatemapssubmenu && (<ul className='submenu absolute top-10 left-0 bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Maharashtra</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Uttar Pradesh</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Rajasthan</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Tamil Nadu</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Karnataka</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Kerala</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Andhra Pradesh</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Gujarat</a>
                </li>
              </ul>)}
              {statemapsopen ? <FaPlus onClick={statemapsPlus}/> : <RiSubtractFill onClick={statemapsMinus}/>}
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showutilitymapssubmenu ? 'pb-80' : 'pb-4'}`} >
                  <a href="#">Utility Maps</a>
                  {showutilitymapssubmenu && (<ul className='submenu absolute top-10 left-0 bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Distances</a>
                </li>
                <li className='mb-2'>
                  <a href="#">International Flights</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Domestic Flights</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Railway Time Table</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Bus Schedule</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Pin Code</a>
                </li>
                <li className='mb-2'>
                  <a href="#">STD Code</a>
                </li>
                <li className='mb-2'>
                  <a href="#">IFSC Code</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Villages</a>
                </li>
              </ul>)}
              {utilitymapsopen ? <FaPlus onClick={utilitymapsPlus}/> : <RiSubtractFill onClick={utilitymapsMinus}/>}
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showlanguagemapssubmenu ? 'pb-72' : 'pb-4'}`} >
                  <a href="#">Language Maps</a>
                  {showlanguagemapssubmenu && (<ul className='submenu absolute top-10 left-0 bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Bengali</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Hindi</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Kannada</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Malayalam</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Marathi</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Telugu</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Punjabi</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Tamil</a>
                </li>
              </ul>)}
              {languagemapsopen ? <FaPlus onClick={languagemapsPlus}/> : <RiSubtractFill onClick={languagemapsMinus}/>}
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showthematicmapssubmenu ? 'pb-72' : 'pb-4'}`} >
                  <a href="#">Thematic Maps</a>
                  {showthematicmapssubmenu && (<ul className='submenu absolute top-10 left-0 bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Topographic Map For Kids</a>
                </li>
                <li className='mb-2'>
                  <a href="#">India River Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Census 2011</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Languages Map</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Fruits Map of India</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Information On India Maps</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Zonal Maps Of India</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Neighbouring Countries Of India</a>
                </li>
              </ul>)}
              {thematicmapsopen ? <FaPlus onClick={thematicmapsPlus}/> : <RiSubtractFill onClick={thematicmapsMinus}/>}
                </li>
              </ul>)}
              {mapsopen ? <FaPlus onClick={mapsPlus}/> : <RiSubtractFill onClick={mapsMinus}/>}
            </li>
            <li className={`pr-6 flex items-center justify-between py-4 relative ${showmyindiasubmenu ? 'pb-60' : 'pb-4'}`} >
              <a href="#">My India</a>
              {showmyindiasubmenu && (<ul className='submenu absolute top-10 left-0 bg-custom-gray z-10 p-3 h-56 overflow-y-scroll'>
                <li className='mb-2'>
                  <a href="#">My India</a>
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showmyindiatravelsubmenu ? 'pb-20' : 'pb-4'}`} >
                  <a href="#">Travel</a>
                  {showmyindiatravelsubmenu && (<ul className='submenu absolute top-10 left-0  bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Unusual India</a>
                </li>
              </ul>)}
              {myindiatravelopen ? <FaPlus onClick={myindiatravelPlus}/> : <RiSubtractFill onClick={myindiatravelMinus}/>}
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showmyindiafoodsubmenu ? 'pb-12' : 'pb-4'}`} >
                  <a href="#">Food</a>
                  {showmyindiafoodsubmenu && (<ul className='submenu absolute top-10 left-0 bg-[#cacaca] z-10 p-3 h-60 overflow-y-scroll'>
                <li className='mb-2'>
                  <a href="#">Beverages Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Breads</a>
                </li><li className='mb-2'>
                  <a href="#">Breakfast Recipes</a>
                </li><li className='mb-2'>
                  <a href="#">Continental Food Recipes</a>
                </li><li className='mb-2'>
                  <a href="#">Desserts And Sweets Recipes</a>
                </li><li className='mb-2'>
                  <a href="#">Festival And Celebration Cuisines</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Chinese Cuisines</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Main Course Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Pickles And Chutney Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Raita Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Starters Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Street Food Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Vegetarian Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Italian Food Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Low Calorie Food Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Non Vegetarian Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">North Indian Food Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Salad Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Seafood</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Soups Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">South Indian Recipes</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Special Food Recipes For Kids</a>
                </li>
              </ul>)}
              {myindiafoodopen ? <FaPlus onClick={myindiafoodPlus}/> : <RiSubtractFill onClick={myindiafoodMinus}/>}
                </li>
                <li className='mb-2 py-2'>
                  <a href="#">IMO</a>
                </li>
                <li className='mb-2 py-2'>
                  <a href="#">India</a>
                </li>
                <li className='mb-2 py-2'>
                  <a href="#">Cricket</a>
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showmyindiareviewssubmenu ? 'pb-36' : 'pb-4'}`} >
                  <a href="#">Reviews</a>
                  {showmyindiareviewssubmenu && (<ul className='submenu absolute bg-[#cacaca] top-10 left-0 z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Book Reviews</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Indian Restaurant Food Reviews</a>
                </li><li className='mb-2'>
                  <a href="#">Movies</a>
                </li>
              </ul>)}
              {myindiareviewsopen ? <FaPlus onClick={myindiareviewsPlus}/> : <RiSubtractFill onClick={myindiareviewsMinus}/>}
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showmyindiamoviessubmenu ? 'pb-24' : 'pb-4'}`} >
                  <a href="#">Movies</a>
                  {showmyindiamoviessubmenu && (<ul className='submenu absolute top-10 left-0 bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Upcoming Movies</a>
                </li>
              </ul>)}
              {myindiamoviesopen ? <FaPlus onClick={myindiamoviesPlus}/> : <RiSubtractFill onClick={myindiamoviesMinus}/>}
                </li>
                <li className={`pr-6 flex items-center justify-between py-2 relative ${showmyindiapoliticssubmenu ? 'pb-32' : 'pb-4'}`} >
                  <a href="#">Politics</a>
                  {showmyindiapoliticssubmenu && (<ul className='submenu absolute top-10 left-0 bg-[#cacaca] z-10 p-3'>
                <li className='mb-2'>
                  <a href="#">Bihar Election</a>
                </li>
                <li className='mb-2'>
                  <a href="#">Election Updates</a>
                </li>
              </ul>)}
              {myindiapoliticsopen ? <FaPlus onClick={myindiapoliticsPlus}/> : <RiSubtractFill onClick={myindiapoliticsMinus}/>}
                </li>
              </ul>)}
              {myindiaopen ? <FaPlus onClick={myindiaPlus}/> : <RiSubtractFill onClick={myindiaMinus}/>}
            </li>
          </ul>
              </div>
              <div>
                <ul className='flex-col items-center justify-between text-[14px] font-bold'>
                <li className={`pr-6 flex items-center justify-between py-4 relative ${showtravelsubmenu ? 'pb-64' : 'pb-4'}`} >
                    <a href="#">Travel</a>
                    {showtravelsubmenu && (<ul className='top-10 left-0 submenu absolute  bg-custom-gray z-10 p-3'>
                      <li className='mb-2'>
                        <a href="#">Munnar</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Coorg</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Goa</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Ooty</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Shimla</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Jammu And Kashmir</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Manali</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Kanyakumari</a>
                      </li>
                    </ul>)}
                    {travelopen ? <FaPlus onClick={travelPlus}/> : <RiSubtractFill onClick={travelMinus}/>}
                  </li>
                  <li className={`pr-6 flex items-center justify-between py-4 relative ${showservicessubmenu ? 'pb-64' : 'pb-4'}`} onMouseOver={()=>setShowservicessubmenu(true)} onMouseLeave={()=>setShowservicessubmenu(false)}>
                    <a href="#">Services</a>
                    {showservicessubmenu && (<ul className='top-10 left-0 submenu absolute bg-custom-gray z-10 p-3'>
                      <li className='mb-2'>
                        <a href="#">Store</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Village Boundary Maps</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Pin Code Boundary Maps</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">World Boundary Maps</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Election Maps</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">GIS Mapping</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Map Based Business Intelligence Solutions</a>
                      </li>
                    </ul>)}
                    {servicesopen ? <FaPlus onClick={servicesPlus}/> : <RiSubtractFill onClick={servicesMinus}/>}
                  </li>
                  <li className={`pr-6 flex items-center justify-between py-4 relative ${showothersubmenu ? 'pb-36' : 'pb-4'}`}>
                    <a href="#">Other</a>
                    {showothersubmenu && (<ul className='top-10 left-0 submenu absolute  bg-custom-gray z-10 p-3'>
                      <li className='mb-2'>
                        <a href="#">Business</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Sports</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Automobiles</a>
                      </li>
                      <li className='mb-2'>
                        <a href="#">Education</a>
                      </li>
                    </ul>)}
                    {othersopen ? <FaPlus onClick={othersPlus}/> : <RiSubtractFill onClick={othersMinus}/>}
                  </li>
                </ul>
              </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar