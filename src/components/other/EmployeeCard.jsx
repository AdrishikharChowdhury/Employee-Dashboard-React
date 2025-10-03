import React from 'react'

const EmployeeCard = ({name, taskCount}) => {
  return (
    <div className="min-size-120 max-size-120 lg:size-120 md:size-100 size-85 lg:p-8 md:p-7 sm:p-6 p-4 bg-emerald-700 flex-shrink-0 border-2 rounded-xl flex flex-col justify-between font-bold border-emerald-950 text-white">
        <div className="w-full flex justify-center items-center">
            <img 
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" alt="" 
        className='lg:size-40 size-30 rounded-full border-2 border-emerald-950'/>
        </div>
        <div className="flex flex-col justify-center gap-4">
            <p className='lg:text-lg text-sm'>Name: {name}</p>
            <p className='lg:text-lg text-sm'>Active Tasks: {taskCount.active}</p>
            <p className='lg:text-lg text-sm'>New Tasks: {taskCount.new}</p>
            <p className='lg:text-lg text-sm'>Failed Tasks: {taskCount.failed}</p>
            <p className='lg:text-lg text-sm'>Completed Tasks: {taskCount.completed}</p>
        </div>
    </div>
  )
}

export default EmployeeCard