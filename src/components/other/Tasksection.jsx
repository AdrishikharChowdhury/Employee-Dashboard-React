import React from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

const Tasksection = ({name}) => {

    const {userData,setUserData}=useContext(AuthContext);
    const employeeInfo = userData?.employeeData ?? [];

    const info=employeeInfo.find((employee)=>employee.name===name)

  return (
    <div className='flex mt-10 items-center justify-center gap-5 px-4 h-60 z-20 relative flex-col'>
        <h1 className='self-start text-3xl font-semibold'>Task Progress: </h1>
        <div className="flex items-center justify-center gap-5 w-full h-full">
            <div className="h-full py-6 px-9 bg-blue-400 flex-grow rounded-xl flex justify-end items-end flex-col">
                <h2 className='text-4xl font-extrabold text-black'>{info.taskCount.new}</h2>
                <h3 className='text-xl font-extrabold text-black'>New Tasks</h3>
            </div>
            <div className="h-full py-6 px-9 bg-green-400 flex-grow rounded-xl flex justify-end items-end flex-col">
                <h2 className='text-4xl font-extrabold text-black'>{info.taskCount.completed}</h2>
                <h3 className='text-xl font-extrabold text-black'>Completed Tasks</h3>
            </div>
            <div className="h-full py-6 px-9 bg-yellow-400 flex-grow rounded-xl flex justify-end items-end flex-col">
                <h2 className='text-4xl font-extrabold text-black'>{info.taskCount.active}</h2>
                <h3 className='text-xl font-extrabold text-black'>Accepted Tasks</h3>
            </div>
            <div className="h-full py-6 px-9 bg-red-400 flex-grow rounded-xl flex justify-end items-end flex-col">
                <h2 className='text-4xl font-extrabold text-black'>{info.taskCount.failed}</h2>
                <h3 className='text-xl font-extrabold text-black'>Failed Tasks</h3>
            </div>
        </div>
    </div>
  )
}

export default Tasksection