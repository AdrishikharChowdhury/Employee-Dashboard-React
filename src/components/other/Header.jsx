import React from 'react'
import { motion } from 'framer-motion';

const Header = ({ info,changeUser }) => {

    const logoutUser=()=>{
        localStorage.setItem('loggedInUser','');
        changeUser('');
    }
  return (
    <div className='glass flex w-full justify-between items-center md:px-16 sm:px-8 px-4 md:py-4 py-3 z-20 relative border-b-green-700 border-b-2 shadow-2xl shadow-green-950 top-0'>
        <img
        src={`${info.photo}`} alt="" 
        className='md:size-30 sm:size-25 size-15  rounded-full border-4 border-black'/>
        <h1 className='md:text-2xl sm:text-lg text-md font-extralight text-white text-center'>
            <span>Welcome to the Kingdom Of Science,</span>
            <br />
            <span className='md:text-4xl sm:text-2xl text-lg font-extrabold'>
                {info.name} 👋
            </span>
        </h1>
        <motion.button 
        className='bg-green-700 md:py-4 py-2 md:px-6 sm:px-3 px-2 md:text-xl sm:text-lg text-sm md:rounded-2xl rounded-lg shadow-2xl shadow-green-950 cursor-pointer text-white'
        onClick={logoutUser}
        whileTap={{
            scale: 0.8
        }}>
            Petrify
        </motion.button>
    </div>
  )
}

export default Header