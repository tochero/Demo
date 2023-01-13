import React, { useState } from 'react'
import {FaBatteryHalf, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const link =[
        {
            title: "Home",
            id: 1,
            href: "https://github.tochero/Demo.git",
            style: "hover:text-black font-bold"
        },
        {
            title: "About",
            id: 2,
            href: "https://github.tochero/Demo.git",
            style: "hover:text-black font-bold"
        },
        {
            title: "Section",
            id: 3,
            href: "https://github.tochero/Demo.git",
            style: "hover:text-black font-bold"
        },
        {
            title: "Class",
            id: 4,
            href: "https://github.tochero/Demo.git",
            style: "hover:text-black font-bold"
        }
    ]
    const[nav, setNav] = useState(false);
    const charlyClick = () =>{
        setNav(!nav)
    }

  return (
    <div className='bg-gradient-to-br from-blue-300 via-blue-400 to-black'>
        <div className='h-20 flex items-center justify-between container mx-auto px-3'>
            <div className='flex items-center gap-5'>
                <h1 className='text-2xl font-special font-bold'>Half life</h1>
                <FaBatteryHalf className='text-red-400' size={40} />
            </div>

            <div>
                <ul className='hidden md:flex  space-x-12 text-white text-[20px] '>
                    {link.map(({title, id, href, style}) => (
                        <li key={id} className={style}>
                            <a href={href}>
                                {title}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>

            <div onClick={charlyClick} className="md:hidden block p-2 rounded-full bg-white  shadow-md shadow-black">
                {!nav? <FaBars className='text-2xl'/> : <FaTimes  className='text-2xl'/>}
            </div>
         

        </div>
      
    </div>
  )
}

export default Navbar
