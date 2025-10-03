import React from 'react'

const Header = ({ info,changeUser }) => {

    const logoutUser=()=>{
        localStorage.setItem('loggedInUser','');
        changeUser('');
    }
  return (
    <div className='flex w-full justify-between items-center md:px-16 sm:px-8 px-4 md:py-4 py-3 z-20 relative border-b-blue-700 border-b-2 shadow-2xl shadow-blue-950 top-0'>
        <h1 className='md:text-2xl sm:text-lg text-md font-extralight text-white'>
            Hello, 
            <br />
            <span className='md:text-4xl sm:text-2xl text-lg font-extrabold'>
                {info.name} 👋
            </span>
        </h1>
        <button 
        className='bg-blue-700 md:py-4 py-2 md:px-6 sm:px-3 px-2 md:text-xl sm:text-lg text-sm md:rounded-2xl rounded-lg shadow-2xl shadow-blue-950 cursor-pointer text-white'
        onClick={logoutUser}>
            Logout
        </button>
    </div>
  )
}

export default Header