import React from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

const Tasksection = ({name}) => {

    const {userData,setUserData}=useContext(AuthContext);
    const employeeInfo = userData?.employeeData ?? [];

    const info=employeeInfo.find((employee)=>employee.name===name)

  return (
    <div className='flex mt-10 items-center justify-center gap-5 lg:px-10 px-5 lg:pt-10 pt-5 lg:h-80 md:h-120 h-100 z-20 relative flex-col'>
        <h1 className='self-start lg:text-3xl text-2xl font-semibold'>Task Progress: </h1>
        <div className="lg:flex items-center justify-center lg:gap-5 md:gap-3 gap-2 w-full h-full flex-wrap grid grid-cols-2 grid-rows-2">
            <div className="h-full lg:py-6 py-4 lg:px-9 md:px-5 px-3 bg-blue-400 flex-grow rounded-xl flex lg:justify-end justify-center items-center lg:items-end flex-col">
                <h2 className='lg:text-4xl md:text-2xl text-lg font-extrabold text-black'>{info.taskCount.new}</h2>
                <h3 className='whitespace-normal break-words lg:text-xl md:text-md text-sm font-extrabold text-black'>New Tasks</h3>
            </div>
            <div className="h-full lg:py-6 py-4 lg:px-9 md:px-5 px-3 bg-green-400 flex-grow rounded-xl flex lg:justify-end justify-center items-center lg:items-end flex-col">
                <h2 className='lg:text-4xl md:text-2xl text-lg font-extrabold text-black'>{info.taskCount.completed}</h2>
                <h3 className='whitespace-normal break-words lg:text-xl md:text-md text-sm font-extrabold text-black'>Completed Tasks</h3>
            </div>
            <div className="h-full lg:py-6 py-4 lg:px-9 md:px-5 px-3 bg-yellow-400 flex-grow rounded-xl flex lg:justify-end justify-center items-center lg:items-end flex-col">
                <h2 className='lg:text-4xl md:text-2xl text-lg font-extrabold text-black'>{info.taskCount.active}</h2>
                <h3 className='whitespace-normal break-words lg:text-xl md:text-md text-sm font-extrabold text-black'>Accepted Tasks</h3>
            </div>
            <div className="h-full lg:py-6 py-4 lg:px-9 md:px-5 px-3 bg-red-400 flex-grow rounded-xl flex lg:justify-end justify-center items-center lg:items-end flex-col">
                <h2 className='lg:text-4xl md:text-2xl text-lg font-extrabold text-black'>{info.taskCount.failed}</h2>
                <h3 className='whitespace-normal break-words lg:text-xl md:text-md text-sm font-extrabold text-black'>Failed Tasks</h3>
            </div>
        </div>
    </div>
  )
}

export default Tasksection