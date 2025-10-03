import React from 'react'

const Header = ({ info,changeUser }) => {

    const logoutUser=()=>{
        localStorage.setItem('loggedInUser','');
        changeUser('');
    }
  return (
    <div className='flex w-full justify-between items-center px-16 py-4 z-20 relative border-b-blue-700 border-b-2 shadow-2xl shadow-blue-950 top-0'>
        <h1 className='text-2xl font-extralight text-white'>
            Hello, 
            <br />
            <span className='text-4xl font-extrabold'>
                {info.name} 👋
            </span>
        </h1>
        <button 
        className='bg-blue-700 py-4 px-6 text-xl rounded-2xl shadow-2xl shadow-blue-950 cursor-pointer text-white'
        onClick={logoutUser}>
            Logout
        </button>
    </div>
  )
}

export default Header