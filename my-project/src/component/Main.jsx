import React from 'react'
import picture from '../assests/wp2846771-wallpaper-assassin-creed.jpg'
import {  FaChevronRight, } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600'>
      <div className='h-[80vh] flex items-center  justify-center container mx-auto lg:space-x-12'>
        <div className='space-y-8 lg:ml-4 lg:space-y-4 ml-7'>
          <h1 className='text-3xl max-w-2xl'>I am a fullstack developer and i am currently making a career of it</h1>
          <p className='max-w-lg text-[20px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique necessitatibus odio nemo officia, illum aspernatur nobis unde quis aperiam possimus aliquid et! Dolore provident officia magni, consequatur eligendi voluptate voluptatibus quos, rem praesentium iusto non ipsam quaerat deserunt facilis incidunt dicta porro. Optio tempore porro similique repellat quia repudiandae autem?</p>
          <div>
            <button className='flex items-center btn text-white group'>
              <h3 className='font-classic'>portfolio</h3> 
              <FaChevronRight size={18} className='ml-4 text-black group-hover:rotate-[-90deg] duration-300' />
            </button>
          </div>
        </div>

        <div className=''>
          <img src={picture} alt="" className='hidden lg:block w-[300px] rounded-xl mr-3'/>
        </div>
      </div>

    </div>
  )
}

export default Main
