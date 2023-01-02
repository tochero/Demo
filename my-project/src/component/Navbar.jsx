import React from 'react'
import { useState } from 'react'
import {FaCamera, FaBars, FaTimes, FaHome, FaGlobe, FaBook, FaGamepad} from 'react-icons/fa'
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const lists = [
        {
            id: 1,
            link: 'Home',
            href: 'https://github.com/tochero/Lesson.git',
            child: (
                <>
                Home<FaHome size={25}/> 
                </>
            ),
            style: "rounded-tr-md"

        },
        {
            id: 2,
            link: 'Explorer',
            href: 'https://www.thenetnaija.net/videos/movies',
            child: (
                <>
                Explorer <FaGlobe size={25}/> 
                </>
            )
        },
        {
            id: 3,
            link: 'Library',
            href: '/resume.docx',
            download: true,
            child: (
                <>
                library <FaBook size={25}/> 
                </>
            )
        },
        {
            id: 4,
            link: 'specials',
            href: 'https://www.callofduty.com/',
            child: (
                <>
                Specials <FaGamepad size={25}/> 
                </>
            ),
            style: "rounded-br-md"
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
                {lists.map(({id, child, link, href})=>(
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

        <div className='md:hidden fixed top-[40%] left-0'>
        <ul>
                {lists.map(({id, style, child, href, download})=>(
                    <li key={id} className={"p-3 flex hover:ml-[-5px]  items-center duration-300 hover:rounded-md w-40 h-14 bg-gradient-to-r from-lime-500 via-lime-400 to-lime-200 ml-[-100px]" +
                    " " + style}>
                        <a className='text-[16px] font-bold  font-special flex items-center w-full justify-between space-x-4' 
                        href={href}
                        download={download}
                        target="_blank"
                        rel="noreferrer">
                            {child}
                           
                        </a>
                    </li>
                ))}
            </ul>
        </div>

       
      </div>
    </div>
  )
}

export default Navbar
