import React, { useState } from 'react'
import {GiAfrica} from 'react-icons/gi'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {
  const[show, setShow] = useState(false);
  const subject = [
    {
      id: 1,
      href: "www.maths.com",
      title: "Mathematics",
    },
    {
      id: 2,
      href: "www.maths.com",
      title: "English Language",
    },
    {
      id: 3,
      href: "www.maths.com",
      title: "Basic Tech",
    },
    {
      id: 4,
      href: "www.maths.com",
      title: "Agric Science",
    },
    {
      id: 5,
      href: "www.maths.com",
      title: "Biology",
    },
    {
      id: 6,
      href: "www.maths.com",
      title: "Geography",
    },
    {
      id: 7,
      href: "www.maths.com",
      title: "Accounting",
    },
    {
      id: 8,
      href: "www.maths.com",
      title: "History",
    },
    {
      id: 9,
      href: "www.maths.com",
      title: "computer Science",

    },
    {
      id: 10,
      href: "www.maths.com",
      title: "civic Education",
    },

  
    ]
  const links = [
    {
      id: 1,
      href: "https://github.com/tochero/tochero.github.io",
      title: "Homez"
    },
    {
      id: 2,
      href: "https://github.com/tochero/tochero.github.io",
      title: "Books"
    },
    {
      id: 3,
      href: "https://github.com/tochero/tochero.github.io",
      title: "Accounts"
    },
    {
      id: 4,
      href: "https://github.com/tochero/tochero.github.io",
      title: "Courses"
    },
  ]
  return (
    <div className='bg-gradient-to-br from-gray-400 via-slate-500 to-slate-600 min-h-screen'>
      <div className='bg-gradient-to-br from-cyan-200 via-cyan-300 to-cyan-500'>

          <div className='flex items-center px-3 justify-between container mx-auto h-[90px] md:px-6'>
            <div className='flex space-x-3'>
              <GiAfrica size={50} color={"green"}/>
              <h1>The Zone</h1>
            </div>
          <div>
            <ul className='hidden md:flex space-x-6  lg:space-x-12'>
              {links.map(({id, href, title}) => (
                  <li key={id}
                  className="text-[18px] font-special font-bold "
                  >
                  <a className='hover:text-white hover:scale-[500px]' 
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                 >{title}</a>
                </li>
              )           
              )}
            </ul>
          </div>
          
          <div onClick={()=>{setShow(!show)}} className='md:hidden bg-black p-3 mr-4 rounded-full shadow-md shadow-white z-20'>
              {show? <FaTimes size={25} color={"white"}/> : <FaBars size={25} color={"white"}/>}
          </div>
      </div>
      

      {show && <div className='absolute top-0 left-0 bg-image bg-center bg-cover min-h-screen w-full bg-no-repeat overflow-y-scroll'>
          <div className='absolute top-0 left-0 min-h-screen w-full bg-black bg-opacity-[82%] px-8 py-6  leading-9 font-bold text-[24px]'>
            <h1 className='text-white pb-1  border-cyan-200 border-b-2 inline'>courses</h1>
            
            {subject.map(({id, href, title}) =>(
              
              <ul className='leading-[90px]'>
                <li key={id} className="text-white">
                  <a
                  className='font-classic hover:text-cyan-300 hover:duration-500'
                  target="_blank"
                  rel="noreferrer"
                   href={href}
                   >
                    {title}
                  </a>
                </li>
              </ul>
            ))}
              
          </div>
      </div>
      }
      
      
      </div>

    </div>
  )
}

export default Navbar
