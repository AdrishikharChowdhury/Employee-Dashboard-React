import React from 'react'

const TaskCard = ({title,description,date,name,status,category}) => {

    const color=(status)=>{
        if(status=="New"){ return "bg-blue-400"}
        if(status=="Active"){ return "bg-yellow-400" }
        if(status=="Failed"){ return "bg-red-400" }
        if(status=="Completed"){ return "bg-green-400" }
    }

  return (
    <div className={`min-h-120 max-w-120 w-120 p-8 ${color(status)} flex-shrink-0 border-2 rounded-xl flex flex-col justify-between font-bold text-black`}>
        <p>{date}</p>
        <div className='flex flex-col items-start justify-center gap-4'>
            <p className='text-3xl font-extrabold'>{title}</p>
            <p>
                {description}
            </p>
        </div>
        <p>Assigned To: {name}</p>
        <p>Category: {category}</p>
        <p className='bg-rose-700 text-lg p-4 w-full text-center font-bold text-white border-4 rounded-xl'>{status}</p>
    </div>
  )
}

export default TaskCard