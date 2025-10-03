import React from 'react'

const EmployeeCard = ({name, taskCount}) => {
  return (
    <div className="min-h-120 max-w-100 w-120 p-8 bg-emerald-700 flex-shrink-0 border-2 rounded-xl flex flex-col justify-between font-bold border-emerald-950 text-white">
        <div className="w-full flex justify-center items-center">
            <img 
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" alt="" 
        className='size-40 rounded-full border-2 border-emerald-950'/>
        </div>
        <div className="flex flex-col justify-center gap-4">
            <p className='text-lg'>Name: {name}</p>
            <p className='text-lg'>Active Tasks: {taskCount.active}</p>
            <p className='text-lg'>New Tasks: {taskCount.new}</p>
            <p className='text-lg'>Failed Tasks: {taskCount.failed}</p>
            <p className='text-lg'>Completed Tasks: {taskCount.completed}</p>
        </div>
    </div>
  )
}

export default EmployeeCard