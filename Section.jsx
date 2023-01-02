import React, { useState } from 'react'
// import IMG from '../assests/Annotation 2021-12-30 183606.jpg'
import BIG from '../assests/WIN_20210825_04_35_53_Pro.jpg'


const Section = () => {
        const[nav, setNav] = useState(false)
        const click = () => setNav(!nav)
  return (
    <div>
        <div className='container p-2 bg-white flex flex-col items-center md:flex md:justify-evenly'>
            <div className='flex flex-col py-2 space-y-6 '>
                <div className='flex flex-col items-center md:flex md:items-center md:space-y-4'>
                    <img className='w-20 h-20 rounded-full' src={BIG} alt="" />
                    <h1 className='max-w-md '>THE FOUNDER</h1>
                </div>
                
                <p className='max-w-xs '>The smart-<span className='text-red-500'>Tech</span>      enterprise was founded by Tochero in the year 2023, not by certificate but by divine grace..</p>
            </div>
            <div className='mt-9'>
                <h2 className='font-bold border-b-2 border-zinc-400 text-center' onClick={click}> {!nav? 'About' : 'About'}</h2>
                <ul className={!nav? 'hidden' : 'text-sm text-center px-2 bg-lime-50'}>
                    <li>A teacher</li>
                    <li>A Programmer</li>
                    <li>A Mathematician</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Section
