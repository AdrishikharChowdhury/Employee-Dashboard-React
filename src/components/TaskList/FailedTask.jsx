import React from 'react'

const FailedTask = ({title,description,date,category}) => {
  return (
    <div className="lg:size-100 size-80 lg:p-5 p-3 bg-senku-red text-white flex-shrink-0 border-2 rounded-xl border-red-800 flex flex-col justify-start gap-10">
        <div className="w-full flex items-center justify-between">
            <h2 className='bg-red-600 p-2 rounded-lg text-white'>{category}</h2>
            <h2>{date}</h2>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
            <h3 className='lg:text-2xl text-lg font-bold'>{title}</h3>
            <h3 className='text-sm'>{description}</h3>
        </div>
    </div>
  )
}

export default FailedTask