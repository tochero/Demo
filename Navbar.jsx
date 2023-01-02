import React, { useState } from 'react'
import {FaPiggyBank, FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const clicker = () => setNav(!nav)
  return (
    <div>
        <div className='flex justify-between p-3 lg:px-20 bg-slate-400 items-center'>
            <div className='flex items-center space-x-2'>
                <h1 className=' tracking-tighter'>SMaRT <span className='font-extrabold'>-</span> <span className='text-red-700'>TecH</span> </h1>
                <FaPiggyBank size="2.5em" color='blue'/>
            </div>
            {/* <div>
                <img className='rounded-full p-3  w-16 h-16' src={bgImg} alt="" />
            </div> */}
            <ul className='hidden sm:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Payroll</li>
            </ul>
            <div className='sm:hidden' onClick={clicker} >
                {!nav? <FaBars size="1.5em"/> : <FaTimes size="1.5em"/>}
            </div>
        </div>
        <div>
            <ul className={!nav? 'hidden' : 'block'} >

                <li className='listo'>Home</li>
                <li className='listo'>About</li>
                <li className='listo'>Services</li>
                <li className='listo'>Payroll</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
