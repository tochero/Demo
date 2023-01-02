import React from 'react'
import { useState } from 'react'
import {FaCamera, FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const lists = [
        {
            id: 1,
            link: 'Home',
            href: 'https://github.com/tochero/Lesson.git'
        },
        {
            id: 2,
            link: 'Explorer',
            href: 'https://www.thenetnaija.net/videos/movies'
        },
        {
            id: 3,
            link: 'Library',
            href: 'https://portal.futo.edu.ng/'
        },
        {
            id: 4,
            link: 'Specials',
            href: 'https://www.callofduty.com/'
        },
    ]
  return (
    <div className='bg-gradient-to-r from-lime-200 via-lime-400 to-lime-600'>
      <div className='flex justify-between container  mx-auto px-6 h-20'>
        <div className='flex items-center space-x-4'>
            <FaCamera size={30} />
            <h1>classic drip</h1>
        </div>
        <div className=''>
            <ul className='hidden md:flex space-x-8 items-center h-full'>
                {lists.map(({id, link, href})=>(
                    <li className='' key={id}>
                        <a className='text-[16px] font-bold hover:text-white duration-500 font-special' href={href}>
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        <div onClick={()=>setNav(!nav)} className='md:hidden flex items-center z-10'>
           {nav?<FaTimes className='liner p-2 ' size={40}/> : <FaBars className='liner p-2 ' size={40} />}
        </div>

        {nav &&  <div className='md:hidden absolute top-0 left-0 h-screen w-[80%] flex flex-col duration-300 justify-center items-center bg-gradient-to-tl from-gray-100 via-gray-300 to-gray-200 md:w-[60%] lg:w-[30%]'>
            <h1 className='absolute top-[3%] text-center text-red-400 mb-12'>The real-Site</h1>
        <ul className='flex flex-col'>
                {lists.map(({id, link, href})=>(
                    <li className='bg-white mb-20 p-3 rounded-md text-center w-60 hover:bg-black duration-200 group' key={id}>
                        <a className='[16px] font-bold group-hover:text-cyan-400 duration-500 font-special' href={href}>
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        
        
        }

       
      </div>
    </div>
  )
}

export default Navbar
