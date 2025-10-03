import React from 'react'

const TaskCard = ({title,description,date,name,status,category}) => {

    const color=(status)=>{
        if(status=="New"){ return "bg-stone-blue text-black"}
        if(status=="Active"){ return "bg-stone-yellow text-black" }
        if(status=="Failed"){ return "bg-senku-red text-white" }
        if(status=="Completed"){ return "bg-stone-green text-white" }
    }

  return (
    <div className={`min-size-120 max-size-120 border-black lg:size-120 md:size-100 size-85 lg:p-8 md:p-7 sm:p-6 p-4 ${color(status)} flex-shrink-0 border-2 rounded-xl flex flex-col justify-between font-bold`}>
        <p className='lg:text-base text-sm'>{date}</p>
        <div className='flex flex-col items-start justify-center gap-4'>
            <p className='lg:text-3xl sm:text-2xl text-lg font-extrabold'>{title}</p>
            <p className='lg:text-base text-sm'>
                {description}
            </p>
        </div>
        <p className='lg:text-base text-sm'>Assigned To: {name}</p>
        <p className='lg:text-base text-sm'>Category: {category}</p>
        <p className='bg-stone-700 lg:text-lg text-sm lg:p-4 p-3 w-full text-center font-bold text-white border-4 rounded-xl'>{status}</p>
    </div>
  )
}

export default TaskCard