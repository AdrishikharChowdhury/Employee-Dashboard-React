import React from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

const Tasksection = ({name}) => {

    const {userData,setUserData}=useContext(AuthContext);
    const employeeInfo = userData?.employees ?? [];

    const info=employeeInfo.find((employee)=>employee.name===name)

  return (
    <div className='flex mt-10 items-center justify-center gap-5 lg:px-10 px-5 lg:pt-10 pt-5 lg:h-90 md:h-130 h-110 z-20 relative flex-col'>
        <h1 className='glass p-3 self-start lg:text-3xl text-2xl font-semibold'>Mission Progress: </h1>
        <div className="glass p-4 lg:flex items-center justify-center lg:gap-5 md:gap-3 gap-2 w-full h-full flex-wrap grid grid-cols-2 grid-rows-2">
            <div className="h-full lg:py-6 py-4 lg:px-9 md:px-5 px-3 bg-stone-blue flex-grow rounded-xl flex lg:justify-end justify-center items-center lg:items-end flex-col">
                <h2 className='lg:text-4xl md:text-2xl text-lg font-extrabold text-black'>{info.taskCount.new}</h2>
                <h3 className='whitespace-normal break-words lg:text-xl md:text-md text-sm font-extrabold text-black'>New Missions</h3>
            </div>
            <div className="h-full lg:py-6 py-4 lg:px-9 md:px-5 px-3 bg-stone-green flex-grow rounded-xl flex lg:justify-end justify-center items-center lg:items-end flex-col">
                <h2 className='lg:text-4xl md:text-2xl text-lg font-extrabold text-white'>{info.taskCount.completed}</h2>
                <h3 className='whitespace-normal break-words lg:text-xl md:text-md text-sm font-extrabold text-white'>Completed Missions</h3>
            </div>
            <div className="h-full lg:py-6 py-4 lg:px-9 md:px-5 px-3 bg-stone-yellow flex-grow rounded-xl flex lg:justify-end justify-center items-center lg:items-end flex-col">
                <h2 className='lg:text-4xl md:text-2xl text-lg font-extrabold text-black'>{info.taskCount.active}</h2>
                <h3 className='whitespace-normal break-words lg:text-xl md:text-md text-sm font-extrabold text-black'>Accepted Missions</h3>
            </div>
            <div className="h-full lg:py-6 py-4 lg:px-9 md:px-5 px-3 bg-senku-red flex-grow rounded-xl flex lg:justify-end justify-center items-center lg:items-end flex-col">
                <h2 className='lg:text-4xl md:text-2xl text-lg font-extrabold text-white'>{info.taskCount.failed}</h2>
                <h3 className='whitespace-normal break-words lg:text-xl md:text-md text-sm font-extrabold text-white'>Failed Missions</h3>
            </div>
        </div>
    </div>
  )
}

export default Tasksection