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

        <div onClick={()=>setNav(!nav)} className='md:hidden flex items-center'>
           {nav?<FaBars className='liner p-2 ' size={40}/> : <FaTimes className='liner p-2 ' size={40} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
